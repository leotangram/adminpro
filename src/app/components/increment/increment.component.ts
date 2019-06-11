import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Input() legend: string = 'Leyenda';
  @Input() progress: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

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
    this.changeValue.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

  /**
   * Determines whether change on
   * @param newValue
   */
  onChange(newValue: number) {
    // let elementHTML: any = document.getElementsByName('progress')[0];

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    // elementHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.changeValue.emit(this.progress);
  }
}
