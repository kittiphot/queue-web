import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SettingsService } from '../../../shared/services/settings.service'

@Component({
  templateUrl: './settingsForm.component.html',
  animations: [routerTransition()]
})
export class SettingsFormComponent {
  private settings: any

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    console.log('test');
  }

}
