import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SettingsService } from '../../shared/services/settings.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routerTransition()]
})
export class SettingsComponent implements OnInit {
  private settings: any
  private queueFormat : any 
  private lastQueue : any 

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() { 
    this.getSettings();
    this.getLastQueue();
  }

  getLastQueue() {
    this.settingsService.getLastQueue().subscribe(res => {
      console.log(res)
      this.lastQueue = res['0']['queue']
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      console.log(res)
      this.settings = res
      this.queueFormat = res['0']['name']
    }, err => console.log(err))
  }

}
