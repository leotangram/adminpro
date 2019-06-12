import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {
  constructor() {
    this.observable();
  }

  ngOnInit() {}

  /**
   * Observables rxjs component
   */
  observable() {
    this.cameBackObservable()
      .pipe(retry(2))
      .subscribe(
        number => console.log('Subs', number),
        error => console.error('Error en el observable', error),
        () => console.log('El observador terminó!')
      );
  }

  cameBackObservable(): Observable<number> {
    return new Observable(observer => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        observer.next(counter);
        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        }
        if (counter === 2) {
          // clearInterval(interval);
          observer.error('Auxilio!');
        }
      }, 1000);
    });
  }
}
