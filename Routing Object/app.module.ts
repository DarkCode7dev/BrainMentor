import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SidesComponent } from './sides/sides.component';
import { PizzahomeComponent } from './pizzahome/pizzahome.component';
import { MenuComponent } from './widgets/menu/menu.component';

@NgModule({
  declarations: [						
    AppComponent,
      DealsComponent,
      DessertsComponent,
      DrinksComponent,
      PizzasComponent,
      SidesComponent,
      PizzahomeComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
