import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './shopsearch/list/item/item.component';
import { ListComponent } from './shopsearch/list/list.component';
import { SearchboxComponent } from './shopsearch/searchbox/searchbox.component';
import { ShopsearchComponent } from './shopsearch/shopsearch.component';
import { TitleComponent } from './shopsearch/title/title.component';
import { TotalitemincartComponent } from './shopsearch/totalitemincart/totalitemincart.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductService } from './shopsearch/services/product_service';
import { CategoryService } from './shopsearch/services/category_services';
import { Cart } from './shopsearch/services/cart_service';
import { TokenInterceptor } from './shopsearch/interceptors/token_interceptor';
@NgModule({
  declarations: [	
    AppComponent,
      ShopsearchComponent,
      ListComponent,
      TitleComponent,
      SearchboxComponent,
      TotalitemincartComponent,
      ItemComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService,CategoryService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
