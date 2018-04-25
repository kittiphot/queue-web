import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { SettingsService } from '../../shared/services/settings.service'
import { DateTimeService } from '../../shared/services/datetime.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routerTransition()]
})
export class SettingsComponent implements OnInit {
  private queueFormat: any
  private lastQueue: any
  private logo: any
  private QR: any
  private wait: any
  private footer: any
  private statusLogo: any
  private statusQR: any
  private statusWait: any
  private statusFooter: any
  private timeoutID: any
  private alerts: Array<any> = [];

  constructor(
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) { }

  ngOnInit() {
    this.getSettings();
    this.getShowSettings();
    this.getShowSettingsByStatus();
  }

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  getShowSettingsByStatus() {
    this.settingsService.getShowSettingsByStatus().subscribe(res => {
      // console.log(res)
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          if (element['id'] == 3) {
            this.logo = element['value']
          }
          else if (element['id'] == 4) {
            this.QR = element['value']
          }
          else if (element['id'] == 5) {
            this.wait = element['value']
          }
          else if (element['id'] == 6) {
            this.footer = element['value']
          }
        }
      }
    }, err => console.log(err))
  }

  getShowSettings() {
    this.settingsService.getShowSettings().subscribe(res => {
      // console.log(res)
      this.statusLogo = (res['0']['status'] == 1 ? res['0']['status'] : "")
      this.statusQR = (res['1']['status'] == 1 ? res['1']['status'] : "")
      this.statusWait = (res['2']['status'] == 1 ? res['2']['status'] : "")
      this.statusFooter = (res['3']['status'] == 1 ? res['3']['status'] : "")
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      // console.log(res)
      this.queueFormat = res['0']['value']
      this.lastQueue = res['1']['value']
    }, err => console.log(err))
  }

  resetQueue() {
    this.settingsService.getResetQueue().subscribe(res => {
      console.log(res)
      this.alerts = [];
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Success reset',
      });
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    // console.log(myform.value))
    this.alerts = [];
    let param = {
      queueFormat: myform.value.queueFormat
    }
    let params = {
      footerInput: myform.value.footerInput,
      statusLogo: (myform.value.logo == 1 ? myform.value.logo : 0),
      statusQR: (myform.value.QR == 1 ? myform.value.QR : 0),
      statusWait: (myform.value.wait == 1 ? myform.value.wait : 0),
      statusFooter: (myform.value.footer == 1 ? myform.value.footer : 0)
    }
    // console.log(params)
    this.settingsService.setQueueFormat(param).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
    this.settingsService.setShowSettings(params).subscribe(res => {
      console.log(res)
      this.logo = ""
      this.QR = ""
      this.wait = ""
      this.footer = ""
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Success save',
      });
      this.getShowSettings();
      this.getShowSettingsByStatus();
    }, err => console.log(err))
  }

}
