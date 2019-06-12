import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.observable();
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  /**
   * Observables rxjs component
   */
  observable() {
    this.subscription = this.cameBackObservable()
      .pipe(retry(2))
      .subscribe(
        number => console.log('Subs', number),
        error => console.error('Error en el observable', error),
        () => console.log('El observador terminó!')
      );
  }

  cameBackObservable(): Observable<any> {
    return new Observable(observer => {
      let counter = 0;
      let interval = setInterval(() => {
        counter++;
        const exit = {
          value: counter
        };
        observer.next(exit);
        // if (counter === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
        // if (counter === 2) {
        //   // clearInterval(interval);
        //   observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
      map(result => result.value),
      filter((value, index) => {
        if (value % 2 === 1) {
          // Impar
          return true;
        } else {
          // Par
          return false;
        }
      })
    );
  }
}
