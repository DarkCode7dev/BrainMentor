import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  //discount:number =0.0;
  pizzaOffers :{discount:number, days:number} = {discount:0.0, days:0};
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   //this.discount= this.route.snapshot.params['discount']
   this.pizzaOffers = {
   
    discount: this.route.snapshot.params['discount'],
    days: this.route.snapshot.params['limit']

  }
  }

}
