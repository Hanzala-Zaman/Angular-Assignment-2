import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit
{

  constructor (public productList: ProductService)
  {}
  ngOnInit()
  {
        
  }
  tempArr: any[] = [];
  deleteProd(index:any)
  {
    this.tempArr.push(this.productList.products[index]);
    this.productList.products.splice(index, 1);
   
   
  }

  againPush(index:any) 
  {
    this.productList.products.push(this.tempArr[index]);
    this.tempArr.splice(index, 1);
  }
}
