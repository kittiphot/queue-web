import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  animations: [routerTransition()]
})
export class StaffComponent implements OnInit {
  staff: any

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
  setmageStatus(ID:number){
let param ={
  id: ID,
}
this.service.deleteStaff(param).subscribe((res)=>{
console.log(res)
},(err: HttpErrorResponse)=> {
  console.log(JSON.stringify(err));
})

  }


  
}
