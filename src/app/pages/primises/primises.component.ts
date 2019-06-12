import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primises',
  templateUrl: './primises.component.html',
  styles: []
})
export class PrimisesComponent implements OnInit {
  constructor() {
    this.promise();
  }

  ngOnInit() {}

  promise() {
    let promise = new Promise((resolve, reject) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        console.log(counter);

        if (counter === 3) {
          resolve('OK!');
          // reject('Simplemente un error');
          clearInterval(interval);
        }
      }, 1000);
    });

    promise
      .then(message => console.log('Terminó', message))
      .catch(error => console.error('Error en la promesa', error));
  }
}
