import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductServiceService } from '../../../test-product/product-service.service';
import { StartPauseCountComponent } from '../start-pause-count/start-pause-count.component';

@Component({
  selector: 'app-timer-landing',
  templateUrl: './timer-landing.component.html',
  styleUrls: ['./timer-landing.component.css'],
  
})
export class TimerLandingComponent implements OnInit {
  public timerValue;
  public isPaused;
  public isReset;

  @ViewChild(StartPauseCountComponent) comp;

  constructor(private prodservice: ProductServiceService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.comp)
  }

  public setEmittedTimerValue(event): void {
    this.timerValue = event.timerValue;
    this.isPaused = event.buttonAction;
  }

  public resetTimerValue(event): void {
    console.log(event)
    this.isReset = event;
    
  }

}