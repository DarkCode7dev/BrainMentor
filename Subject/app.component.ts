import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {//15video 25 min 
  title = 'demoRxjs';
  count: number = 0;
  constructor() {}

  ajaxWithObservable():Observable<object>{
    const URL:string = 'https://itunes.apple.com/search?term=jack johnson&limit=25';
    const obs: Observable<object> = new Observable((observer)=>{
      const promise = fetch(URL);
      promise.then(response=>{
        response.json().then(result=>{
            observer.next(result);
            observer.complete();
        }).catch(err=>{
            observer.error(err);
        })

      });
    });
    return obs;
  }


  writeOwnObservable(time:number): Observable<number>{
    const myObs:Observable<number> = new Observable((observer)=>{
      let count = 0;
      setInterval(()=>{
          count++;
          observer.next(count); // Here it is putting the data on Stream.

          if(count == 10){
            observer.complete();
          }
          // if(count>=5){
          //   observer.error(new Error('Value is >=5 '));
          // }
      }, time);
    });
    return myObs;
  }
  ngOnInit(): void {

     
    
    // let obs: Observable<object> =  this.ajaxWithObservable();
    // obs.subscribe({
    //   next: data=>console.log('Data is ', data),
    //   error: err=>console.log('Error is ', err), complete: ()=>console.log('Completed....')
    // })
    
      let obs : Observable<number> = this.writeOwnObservable(1000);
      let obs2:Observable<number> =obs.pipe(map(data=>data**3),filter(data=>data>200)
      );

      obs2.subscribe({
            next: data=>console.log('Data Rec ', data),
            error:err=>console.log('Error is ', err), complete:()=>console.log('Completed   ')
          });

      //  obs.subscribe({
      //     next: data=>console.log('Data Rec ', data),
      //     error:err=>console.log('Error is ', err), complete:()=>console.log('Completed   ')
      //   });



    // let obs: Observable<number>  =   interval(1000);
    // let sub:Subscription = obs.subscribe({
    //     next: val=>console.log('Obs1 Value rec ', val), error:err=>console.log('Stream Error '),
    //      complete:()=>console.log('Completed....')})

    //      setTimeout(()=>{
    //        sub.unsubscribe();
    //        console.log('Stream UnSubscribe');
    //        }, 7000);

    //        let obs2:Observable<number>  = interval(3000);
    //        obs2.subscribe({next:data=>console.log('Obs2 data is ', data)});
    //        setTimeout(()=>{
    //          sub.unsubscribe();
    //          console.log('Stream UnSubscribe');
    //        }, 7000);


    // document.querySelector('#bt')?.addEventListener('click', () => {
    //   this.count++;
    //   console.log('Click happens ', this.count);
    //   setTimeout(() => {
    //     console.log('Timeout Happens after 5 sec');
    //     setInterval(() => {
    //       this.count++;
    //       console.log('Set Interval calls ', this.count);
    //     }, 4000);
    //   }, 5000);
    // });
  }
}
