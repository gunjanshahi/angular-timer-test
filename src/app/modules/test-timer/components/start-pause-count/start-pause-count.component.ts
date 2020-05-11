import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-start-pause-count',
  templateUrl: './start-pause-count.component.html',
  styleUrls: ['./start-pause-count.component.css']
})
export class StartPauseCountComponent implements OnChanges {
  public startCount = 0;
  public pausedCount = 0

  @Input() isPaused;
  @Input() isReset;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isPaused && changes.isPaused.currentValue !== changes.isPaused.previousValue) {
      this.isPaused = changes.isPaused.currentValue;
      if (this.isPaused) {
        this.pausedCount++;
      } else {
        this.startCount++;
      }
    }

    if (changes.isReset && changes.isReset.currentValue) {
      this.startCount = 0;
      this.pausedCount = 0;
    }
  }

}