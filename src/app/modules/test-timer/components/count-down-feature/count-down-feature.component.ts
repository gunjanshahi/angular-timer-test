import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-down-feature',
  templateUrl: './count-down-feature.component.html',
  styleUrls: ['./count-down-feature.component.css']
})
export class CountDownFeatureComponent implements OnInit {
  public buttonText: string = 'Start';
  public isButtonStart: boolean = true;
  private timerValue;

  @Output() emitTimerValue = new EventEmitter<any>();
  @Output() resetTimerValue = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  public startPauseTimer(timerValue): void {
    this.timerValue = parseInt(timerValue, 10);
    this.isButtonStart = !this.isButtonStart;
    this.buttonText = this.isButtonStart ? 'Start': 'Pause';
    this.emitTimerValue.emit({timerValue: timerValue, buttonAction: this.isButtonStart});
  }

  public resetTimer(timerValue): void {
    this.isButtonStart = true;
    this.buttonText = this.isButtonStart ? 'Start': 'Pause';
    this.resetTimerValue.emit(true);
  }


}