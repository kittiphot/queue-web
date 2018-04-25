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

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.getUserScreen();
  }

  getUserScreen() {
    this.settingsService.getUserScreen().subscribe(res => {
      console.log(res)
      this.userScreen = res['value']
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    // console.log(myform.value)
    let param = {
      value: myform.value.userScreen
    }
    this.settingsService.setUserScreen(param).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
  }

}
