import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ganna';
  count:number=0;

  plus():void{
this.count++
  }




  takeInput(event:any){
let name = event.target.value
this.title= name;
console.log(name)
  }
}
