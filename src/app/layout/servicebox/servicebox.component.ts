import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.component.html',
  styleUrls: ['./servicebox.component.scss'],
  animations: [routerTransition()]
})
export class ServiceboxComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor(private service: ConfigService) {

  }

  ngOnInit() {
    this.getServicebox()
  }

  getServicebox() {
    this.service.getServicebox().subscribe(res => {
      console.log(res)
      this.data = res
      let statusAlerts = localStorage.getItem('alerts')
      localStorage.removeItem('alerts');
      if (statusAlerts == "1") {
        this.alerts = [];
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Success save',
        });
      }
    }, err => console.log(err))
  }

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  setStatus($id) {
    this.service.setStatus($id).subscribe(res => {
      console.log(res)
      this.alerts = [];
      this.alerts.push({
        id: 1,
        type: 'danger',
        message: 'Success delete',
      });
      this.getServicebox()
    }, err => console.log(err))
  }

}
