import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'
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

  constructor(
    private service: ConfigService,
    private router: Router,
  ) {

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
        setmageStatus(ID:number){
      let param =
      {
        id: ID,
      }
      this.service.deleteStaff(param).subscribe((res)=>{
        // this.router.navigate(['staff']);
        this.getstaff();
      console.log('55555555')
      },err => console.log(err))

        }

}
