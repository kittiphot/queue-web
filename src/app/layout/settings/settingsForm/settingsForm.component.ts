import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  templateUrl: './settingsForm.component.html',
  animations: [routerTransition()]
})
export class SettingsFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
