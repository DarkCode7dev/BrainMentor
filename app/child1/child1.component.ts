import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  name: string;

  constructor(private commService:CommService) {

    this.name = '';
  }

  ngOnInit() {
  }
  takeName(event:any){
    this.name = event.target.value;
    this.commService.takeName(this.name);
    console.log('Name Value rec ', this.name);
}
}
