import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/config.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  animations: [routerTransition()]
})
export class StaffComponent implements OnInit {
  staff: any
  private alerts: Array<any> = [];

  constructor(
    private service: ConfigService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.getstaff();
  }

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  getstaff() {
    this.service.getStaff().subscribe(res => {
      console.log(res)
      this.staff = res
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

  gotoEdit() {

  }
  setmageStatus(ID: number) {
    let param =
      {
        id: ID,
      }
    this.service.deleteStaff(param).subscribe((res) => {
      // this.router.navigate(['staff']);
      this.getstaff();
      console.log('55555555')
      this.alerts = [];
      this.alerts.push({
        id: 1,
        type: 'danger',
        message: 'Success delete',
      });
    }, err => console.log(err))

  }

}
