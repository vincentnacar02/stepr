import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock$: Observable<number>;

  constructor() { 
    this.clock$ = interval(2000);
  }

  getClock() : Observable<number> {
    return this.clock$;
  }
  
}
