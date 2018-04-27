import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@Component({
  selector: 'app-userScreen3',
  templateUrl: './userScreen3.component.html',
  styleUrls: ['./userScreen3.component.scss'],
  animations: [routerTransition()]
})
export class UserScreen3Component implements OnInit {
  private temps: any
  private queueFormat : any 
  private date :any
  private time :any
  private queue: any
  private idQueue: any

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) { 
    this.idQueue = "0"
    this.queue = "0"
  }

  ngOnInit() { 
    this.getTemp();
    this.getTime();
    this.getDate();
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
    this.getSettings();
    this.queueService.getTemp().subscribe(res => {
      // console.log(res)
      this.temps = res
      if (this.idQueue != res['0']['id']) {
        if (this.queue == res['0']['queue']) {
          this.idQueue = res['0']['id']
          console.log(this.queueFormat)
          console.log(this.queue)
        }
        if (this.queue != res['0']['queue']) {
          this.idQueue = res['0']['id']
          this.queue = res['0']['queue']
          console.log(this.queueFormat)
          console.log(this.queue)
        }
      }
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      // console.log(res)
      this.queueFormat = res['0']['value']
    }, err => console.log(err))
  }
  
}
