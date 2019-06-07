import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progress: number = 50;

  constructor() {}

  ngOnInit() {}

  changeValueProgress(value) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0
      return;
    }
    this.progress = this.progress + value;
  }
}
