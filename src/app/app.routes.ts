import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'stopwatch', component: StopwatchComponent },
];
