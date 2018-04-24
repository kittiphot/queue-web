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

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) { }

  ngOnInit() { 
    this.getTemp();
    this.getSettings();
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
  
}
