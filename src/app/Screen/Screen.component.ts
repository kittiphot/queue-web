import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'
import { parse } from 'querystring';

@Component({
  selector: 'app-Screen',
  templateUrl: './Screen.component.html',
  styleUrls: ['./Screen.component.scss'],
  animations: [routerTransition()]
})
export class ScreenComponent implements OnInit {
  private temps: any
  private queueFormat : any 
  private nextQueue : any 
  private date :any
  private time :any
  private currentQueue: any
  private callTime: any
  private leftQueue: any

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
   }

  ngOnInit() { 
    this.getTemp();
    this.getSettings();
    this.getNextQueue();
    this.getTime();
    this.getDate();
    this.getCurrentQueue();
    this.getleftQueue();
  }

  getDate() {
    this.dateTimeService.getDate().subscribe(res => {
      // console.log(res)
      this.date = res;
    }, err => console.log(err))
  }

  getTime() {
    this.dateTimeService.getTime().subscribe(res => {
      // console.log(res)
      this.time = res;
    }, err => console.log(err))
  }

  getTemp() {
    this.queueService.getTemp().subscribe(res => {
      // console.log(res)
      this.temps = res
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      // console.log(res)
      this.queueFormat = res['0']['value']
    }, err => console.log(err))
  }

  getNextQueue() {
    this.settingsService.getNextQueue().subscribe(res => {
      // console.log(res)
      this.nextQueue = res
    }, err => console.log(err))
  }
  
  createQueue() {
    this.queueService.createQueue().subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    this.print();
    this.getSettings();
  }
  getCurrentQueue() {
    this.queueService.getCurrentQueue().subscribe(res => {
      // console.log(res)
      this.currentQueue = res
    }, err => console.log(err))
  }

  getleftQueue(){
    let queue = parseInt(this.nextQueue) - 1;
    this.queueService.getleftQueue(queue).subscribe(res => {
      // console.log(res)
      this.leftQueue = res
    }, err => console.log(err))
  }
  
  print(): void {
    let popupWin;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
    <body onload="window.print()" style="padding-right: 10px; text-align: center;">
      <div class="row" style="border: 2px solid;">
        
        <div class="row">
          <h2><b>ร้าน XXXXX</b></h2>
        </div>
        
        
        <div class="row">
          <strong>เวลา ${ this.time }</strong>
        </div>
        
        <br>
        
        <div class="row">
          <strong>คิวของท่าน</strong>
        </div>
        
        <div class="row">
          <strong style="color: red; font-size: 34pt; text-align: center;">${ this.queueFormat }${this.nextQueue}</strong>
        </div>
        
        <div class="row">
          <p>เหลืออีก ${this.leftQueue} คิว</p>
        </div>
        
      </div>
    </body>`
    );
    
    popupWin.document.close();

}
}