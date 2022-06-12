import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  be:BehaviorSubject<string> ;
  constructor() {
    this.be = new BehaviorSubject("");
  }
  getBehaviorSubject():BehaviorSubject<string>{
    return this.be;
  }
  takeName(name:string){
      this.be.next(name);
  }
}
