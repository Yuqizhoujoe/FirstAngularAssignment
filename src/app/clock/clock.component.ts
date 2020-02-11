import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent {
    title = 'London Clock';
    date:any;
    hour:any;
    min:any;
    sec:any;
    showHour = true;
    showMinute = true;
    showSecond = true;
    inputHourValue:any;
    inputMinValue:any;
    inputSecValue:any;
    timeInterval:any;

    showHr(){
        if (this.showHour == true) {
            this.timeInterval = setInterval(() => {
                const currentDate = new Date();
                let hr = currentDate.getHours();
                this.hour = hr.toString();
            }, 1000);
            return this.hour;
        } else {
            return clearInterval(this.timeInterval);
        }
    }

    showMin(){
        if (this.showMinute == true) {
            this.timeInterval = setInterval(() => {
                const currentDate = new Date();
                let min = currentDate.getMinutes();
                this.min = min.toString();
            }, 1000);
            return this.min;
        } else {
            return clearInterval(this.timeInterval);
        }
    }

    showSec(){
        if (this.showSecond == true) {
            this.timeInterval = setInterval(() => {
                const currentDate = new Date();
                let sec = currentDate.getSeconds();
                this.sec = sec.toString();
            }, 1000);
            return this.sec;
        } else {
            return clearInterval(this.timeInterval);
        }
    }

    handleHour(){
        this.showHour = false;
    }
    
    handleMin(){
        this.showMinute = false;
    }
    
    handleSec(){
        this.showSecond = false;
    }

    onHourEnter() {
        this.showHour = true;
    }
    
    onMinuteEnter() {
        this.showMinute = true;
    }
    
    onSecondEnter() {
        this.showSecond = true;
    }

    

}