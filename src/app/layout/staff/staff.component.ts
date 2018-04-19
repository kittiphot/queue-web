import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  animations: [routerTransition()]
})
export class StaffComponent implements OnInit {
  private staff: any

  constructor(private service: ConfigService) {

  }

  ngOnInit() { 
    this.getstaff();
  }

  getstaff() {
    this.service.getStaff().subscribe(res => {
      console.log(res)
      this.staff = res
    }, err => console.log(err))
  }

  gotoEdit(){
    
  }
}
