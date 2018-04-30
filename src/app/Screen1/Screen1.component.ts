import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@Component({
  selector: 'app-Screen1',
  templateUrl: './Screen1.component.html',
  styleUrls: ['./Screen1.component.scss'],
  animations: [routerTransition()]
})
export class Screen1Component implements OnInit {
  private temps: any
  private queueFormat : any 
  private date :any
  private time :any
  private currentQueue: any
  private idServiceBox: any
  private callTime: any
  private idStaff: any

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
    this.idServiceBox = localStorage.getItem('idServiceBox')
    this.idStaff = JSON.parse(localStorage.getItem('logged_profile'))['id']
   }

  ngOnInit() { 
    this.getTemp();
    this.getSettings();
    this.getTime();
    this.getDate();
    this.getCurrentQueue();
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
  createQueue() 
  {

      this.queueService.createQueue().subscribe(res => {
        console.log(res)
      }, err => console.log(err))
      this.getSettings();
  }
  getCurrentQueue() {
    this.queueService.getCurrentQueue(this.idServiceBox).subscribe(res => {
      // console.log(res)
      this.currentQueue = res['queue']
      this.callTime = res['call_time']
    }, err => console.log(err))
  }
  callQueue() {
    let params = {
      idServiceBox: this.idServiceBox,
      idStaff: this.idStaff
    }
    this.queueService.callQueue(params).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    this.getSettings();
  }
}
