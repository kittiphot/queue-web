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

  constructor() {
    this.userScreen = 3;
  }

  ngOnInit() {
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
  }

}
