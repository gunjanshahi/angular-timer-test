import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TimerLandingComponent } from './components/timer-landing/timer-landing.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { CountDownFeatureComponent } from './components/count-down-feature/count-down-feature.component';
import { CountDownLoggerComponent } from './components/count-down-logger/count-down-logger.component';
import { StartPauseCountComponent } from './components/start-pause-count/start-pause-count.component';
import { ProductServiceService } from '../test-product/product-service.service';

const routes: Routes = [
    {
      path: '',
      component: TimerLandingComponent,
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CountDownComponent,
    CountDownFeatureComponent,
    CountDownLoggerComponent,
    StartPauseCountComponent,
    TimerLandingComponent
  ],
  providers: [ProductServiceService]
})
export class TestTimerModule { }