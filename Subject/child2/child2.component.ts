import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  message:string;
  constructor(private commService:CommService) {
    this.message = '';
   }

   ngOnInit(): void {
    this.commService.getBehaviorSubject().subscribe({
      next:(value:string)=>this.message = value,
      error:(err:any)=>this.message = err.message,
      complete:()=>this.message='Completed...'
    })
}

}
