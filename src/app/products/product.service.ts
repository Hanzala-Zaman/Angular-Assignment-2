import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  

    products : any = 
    [
         {
            id:1,
            name:'Iphone14',
            price: '500$',
            brand: 'Apple',
            rating: 4.6 
         },
         {
            id:2,
            name:'Huawei',
            price: '500$',
            brand: 'Apple',
            rating: 4.7
         },
         {
            id:3,
            name:'Nokia',
            price: '500$',
            brand: 'Apple',
            rating: 4.4
         },
         {
            id:4,
            name:'Samsung',
            price: '500$',
            brand: 'Apple',
            rating: 4.8
         },
         {
          id:5,
          name:'Oneplus',
          price: '500$',
          brand: 'Apple',
          rating: 3.7
       },
       {
          id:6,
          name:'Google Pixel 7',
          price: '500$',
          brand: 'Apple',
          rating: 5.0
       },
       {
          id:6,
          name:'Redmi Note 11',
          price: '500$',
          brand: 'Apple',
          rating: 5.0
       }
    ]
    }
  

