import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class TokenInterceptor implements HttpInterceptor{
    startTime:number;
    endTime:number;
    constructor(){
        this.startTime=0;
        this.endTime=0;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.startTime = Date.now();
        if(req.url==''){
            // action
        }
        if(req.method=='GET'){
            // action
        }
        console.log('Token Interceptor CALL');
        //const newRequest = req.clone({headers:req.headers.append('abc','A11111')});
        const newRequest = req.clone();
        return next.handle(newRequest).pipe(tap(event=>{
            if(event.type==HttpEventType.Response){
                    this.endTime = Date.now();
                    let timeTaken = this.endTime - this.startTime;
                    console.log('Time Taken '+(timeTaken));
            }
        }))
    }

}
