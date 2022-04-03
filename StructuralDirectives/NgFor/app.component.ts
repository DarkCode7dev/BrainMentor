import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ganna';


  fruits:string[]  = [];
 

  ngOnInit(): void {
    this.fruits=this.prepareData();
  }
  prepareData(){
    return ["Apple","Mango", "Orange"];

  }

}
