import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;
  constructor() {}

  incCnt() {
    this.counter++;
  }

  decCnt() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
