import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path : 'products',
          loadChildren : () => import ('./products/products.module')
          .then(mod => mod.ProductsModule) 
        
    
        },
        {
          path : 'users',
          
          loadChildren : () => import ('./users/users.module')
          .then(mod => mod.UsersModule) 
    
        },
        {
          path : 'post',
          loadChildren : () => import ('./post/post.module')
          .then(mod => mod.PostModule) 
    
        }
      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
