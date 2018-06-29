import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Step } from '../_models/all.model';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: Observable<Step[]>;
  selected$: BehaviorSubject<Step>;

  constructor(private http: Http) { 
    this.initData();
  }

  private initData() {
    let source$ = this.http.get('assets/data.json').pipe(
      map((res : Response) => res.json())
    );
    this.steps$ = source$.pipe(
      map((result: Step[]) => result ? result : [])
    );
    // this.steps$ = of([]);

    // init default selected
    this.selected$ = new BehaviorSubject(null);
  }

  fetch() : Observable<Step[]>  {
    return this.steps$;
  }

  select(step: Step) {
    this.selected$.next(step);
    console.log(this.selected$);
  }

  onSelectChanged(): Observable<Step> {
    return this.selected$;
  }

  getStep(nextOrderNumber: number) : Observable<Step[]> {
    let source$ = this.fetch();
    return source$.pipe(
      map((steps: Step[]) => steps.filter(step => step.orderNumber == nextOrderNumber))
    );
  }

}
