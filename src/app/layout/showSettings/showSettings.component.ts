import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { SettingsService } from '../../shared/services/settings.service'
import { DateTimeService } from '../../shared/services/datetime.service'

@Component({
  selector: 'app-showSettings',
  templateUrl: './showSettings.component.html',
  styleUrls: ['./showSettings.component.scss'],
  animations: [routerTransition()]
})
export class ShowSettingsComponent implements OnInit {
  private logo: any
  private QR: any
  private wait: any
  private footer: any

  constructor(
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
  }

  ngOnInit() {
    this.getShowSettings();
  }

  getShowSettings() {
    this.settingsService.getShowSettings().subscribe(res => {
      console.log(res)
      this.logo =  res['0']['value']
      this.QR = res['1']['value']
      this.wait = res['2']['value']
      this.footer = res['3']['value']
    }, err => console.log(err))
  }

}
