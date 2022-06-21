import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SidesComponent } from './sides/sides.component';
import { ErrorComponent } from './utils/component/error/error.component';

const routes: Routes =[
  {path : '', component: DealsComponent},
  {path:'pizzas/:discount/:limit', component:PizzasComponent},
  {path: 'sides', component:SidesComponent},
  {path:'desserts', component:DessertsComponent},
  {path:'drinks', component:DrinksComponent},
  {path:'error-page', component:ErrorComponent},
  {path:'**',redirectTo:'/error-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
