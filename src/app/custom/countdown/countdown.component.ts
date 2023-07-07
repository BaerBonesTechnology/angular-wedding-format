import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  date: any;
  now: any;
  targetDate: Date = new Date(2025, 4, 28);
  targetTime: number = this.targetDate.getTime();
  difference!: number;

  _months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  currentTime: any = `${this._months[this.targetDate.getMonth()]
    } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('years', { static: true }) years!: ElementRef;
  @ViewChild('months', { static: true }) months!: ElementRef;
  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference % 365))
        : (this.days.nativeElement.innerHTML = `0`);
    });
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.years.nativeElement.innerText = this.targetDate.getFullYear() - this.date.getFullYear();
    this.months.nativeElement.innerText = 11 - this.date.getMonth();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}
