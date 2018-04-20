import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.form.component.html',
  styleUrls: ['./staff.component.scss'],
  animations: [routerTransition()]
})
export class StaffFormComponent implements OnInit {
   value: any
   id_servicebox: any

  constructor(
    private service: ConfigService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.value = {
      
    };
  }

  ngOnInit() {
    
      
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    console.log('qqqqqqqqqqee')
    let params = myform.value;
    this.service.setCStaff(params)
    .subscribe(res => {
      this.router.navigate(['staff']);
      console.log(res)
    }, err => console.log(err))

  }
}
