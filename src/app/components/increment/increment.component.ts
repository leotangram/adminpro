import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  legend: string = 'Leyenda'
  progress: number = 50;

  constructor() {}

  ngOnInit() {}

  /**
   * Changes value progress
   * @param value
   * @returns
   */
  changeValueProgress(value) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
  }
}
