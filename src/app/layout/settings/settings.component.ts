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

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() { 
    this.getSettings();
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      console.log(res)
      this.settings = res
    }, err => console.log(err))
  }

}
