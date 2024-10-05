import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isStarted = false;
  startTime: any;
  interval: any;
  hours = '00';
  minutes = '00';
  seconds = '00';
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  toggleTimer(): void {
    if (this.isStarted) {
      this.isStarted = false;
    } else {
      this.startTime = new Date();
      this.isStarted = true;
    }
  }

  updateTime(): void {
    if (this.isStarted && this.startTime) {
      const now = new Date();
      const elapsedTime = now.getTime() - this.startTime.getTime();

      const totalSeconds = Math.floor(elapsedTime / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);

      this.hours = this.formatTime(totalHours);
      this.minutes = this.formatTime(totalMinutes % 60);
      this.seconds = this.formatTime(totalSeconds % 60);
    }
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  profileLogo(){
    this.router.navigate(['/dashboard/profile'])

  }
}
