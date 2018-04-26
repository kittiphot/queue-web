import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@Component({
  selector: 'app-staffScreen',
  templateUrl: './staffScreen.component.html',
  styleUrls: ['./staffScreen.component.scss'],
  animations: [routerTransition()]
})
export class StaffScreenComponent implements OnInit {
  private queueFormat: any
  private currentQueue: any
  private callTime: any
  private queueAmount: any
  private time: any
  private idServiceBox: any
  private nameServiceBox: any
  private idStaff: any

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
    this.idServiceBox = localStorage.getItem('idServiceBox')
    this.nameServiceBox = localStorage.getItem('nameServiceBox')
    this.idStaff = JSON.parse(localStorage.getItem('logged_profile'))['id']
  }

  ngOnInit() {
    this.getCurrentQueue();
    this.getSettings();
    this.getListCount();
    this.getTime();
  }

  getTime() {
    this.dateTimeService.getTime().subscribe(res => {
      // console.log(res)
      this.time = res;
    }, err => console.log(err))
  }

  getCurrentQueue() {
    this.queueService.getCurrentQueue(this.idServiceBox).subscribe(res => {
      // console.log(res)
      this.currentQueue = res['queue']
      this.callTime = res['call_time']
    }, err => console.log(err))
  }

  getListCount() {
    this.queueService.getListCount().subscribe(res => {
      // console.log(res)
      this.queueAmount = res
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      // console.log(res)
      this.queueFormat = res['0']['value']
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

  repeatQueueCall() {
    this.queueService.repeatQueueCall(this.idServiceBox).subscribe(res => {
      // console.log(res)
      if (res["message"]=="repeat") {
        for (let index = 0; index < this.queueFormat.length; index++) {
          const element = this.queueFormat[index];
          console.log(element)
        }
        for (let index = 0; index < res["queue"].length; index++) {
          const element = res["queue"][index];
          console.log(element)
        }
      }
    }, err => console.log(err))
    this.getSettings();
  }

  // repeat() {

  // }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('logged_profile');
    localStorage.removeItem('idServiceBox');
    localStorage.removeItem('nameServiceBox');
    this.router.navigate(['login']);
  }

  createQueue() {
    this.queueService.createQueue().subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    this.getSettings();
  }

}
