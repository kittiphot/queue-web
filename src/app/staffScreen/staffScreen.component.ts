import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'

@Component({
  selector: 'app-staffScreen',
  templateUrl: './staffScreen.component.html',
  styleUrls: ['./staffScreen.component.scss'],
  animations: [routerTransition()]
})
export class StaffScreenComponent implements OnInit {
  private queueFormat : any 
  private currentQueue: any
  private callTime : any 
  private queueAmount : any

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() { 
    this.getCurrentQueue();
    this.getSettings();
    this.getListCount();
  }

  getCurrentQueue($id = 4) {
    this.queueService.getCurrentQueue($id).subscribe(res => {
      console.log(res)
      this.currentQueue = res['queue']
      this.callTime = res['call_time']
    }, err => console.log(err))
  }

  getListCount() {
    this.queueService.getListCount().subscribe(res => {
      console.log(res)
      this.queueAmount = res
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      console.log(res)
      this.queueFormat = res['0']['value']
    }, err => console.log(err))
  }

  callQueue() {
    this.queueService.callQueue().subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    this.getCurrentQueue();
    this.getSettings();
    this.getListCount();
  }

  createQueue() {
    this.queueService.createQueue().subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    this.getCurrentQueue();
    this.getSettings();
    this.getListCount();
  }
  
}
