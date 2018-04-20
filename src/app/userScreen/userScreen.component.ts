import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'

@Component({
  selector: 'app-userScreen',
  templateUrl: './userScreen.component.html',
  styleUrls: ['./userScreen.component.scss'],
  animations: [routerTransition()]
})
export class UserScreenComponent implements OnInit {
  private temps: any
  private queueFormat : any 

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() { 
    this.getTemp();
    this.getSettings();
  }

  getTemp() {
    this.queueService.getTemp().subscribe(res => {
      console.log(res)
      this.temps = res
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      console.log(res)
      this.queueFormat = res['0']['value']
    }, err => console.log(err))
  }
  
}
