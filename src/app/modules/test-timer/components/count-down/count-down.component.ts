import { Component,
OnInit,
Input,
OnChanges,
SimpleChanges,
Output,
EventEmitter, 
ChangeDetectionStrategy,
ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnChanges {
  @Input() timerValue = 0;
  @Input() isPaused = true;
  @Input() isReset = false;
  public timerInputValue = 0;
  public countdown;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.timerValue && changes.timerValue.currentValue) {
      this.timerValue = changes.timerValue.currentValue;
      this.timerInputValue = changes.timerValue.currentValue;
    }
    if (changes.isPaused && changes.isPaused.currentValue && !changes.isPaused.previousValue) {
      clearInterval(this.countdown);
      this.countdown = null;
    }

   if (changes.isPaused && !changes.isPaused.currentValue) {
     if (this.timerValue) {
       this.startTimer()
     }
   }

   if (changes.isReset && changes.isReset.currentValue) {
    clearInterval(this.countdown);
    this.countdown = null;
    this.timerValue = this.timerInputValue
   }
    
  }

  private startTimer() {
    this.countdown = setInterval(() => {
      if (this.timerValue <= 0) {
        clearInterval(this.countdown);
        this.countdown = null
      } else {
        this.timerValue = this.timerValue - 1;
      }
      }, 1000);
  }

}