import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { SettingsService } from '../../shared/services/settings.service'

@Component({
  selector: 'app-displayScreen',
  templateUrl: './displayScreen.component.html',
  styleUrls: ['./displayScreen.component.scss'],
  animations: [routerTransition()]
})
export class DisplayScreenComponent implements OnInit {
  private userScreen: any
  private pushQueueScreen: any
  private alerts: Array<any> = [];

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.getScreen();
    this.getUserScreen();
  }

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  getScreen() {
    this.settingsService.getScreen().subscribe(res => {
      console.log(res)
      this.pushQueueScreen = res['value']
    }, err => console.log(err))
  }

  getUserScreen() {
    this.settingsService.getUserScreen().subscribe(res => {
      console.log(res)
      this.userScreen = res['value']
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    this.alerts = [];
    let params = {
      userScreen: myform.value.userScreen,
      pushQueueScreen: myform.value.pushQueueScreen
    }
    this.settingsService.setScreen(params).subscribe(res => {
      console.log(res)
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Success save ',
      });
    }, err => console.log(err))
  }

}
