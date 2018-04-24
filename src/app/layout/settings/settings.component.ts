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

  constructor(
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
  }

  ngOnInit() {
    this.getSettings();
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
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let param = {
      queueFormat: myform.value.queueFormat
    }
    this.settingsService.setQueueFormat(param).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
  }

}
