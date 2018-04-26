import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.form.component.html',
  styleUrls: ['./staff.component.scss'],
  animations: [routerTransition()]
})
export class StaffFormComponent implements OnInit {

   id: any;
   data: any;

  constructor(private service: ConfigService, private route: ActivatedRoute, private router: Router) {
    this.data = { 
      
    };
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){
        this.service.findStaff(this.id).subscribe(res => {
            console.log(res)
            this.data = res
          }, err => console.log(err))
    }else{
      this.data['type'] = 0;
    }
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = myform.value;
    let status = '';
    if (this.id == null) {
      status = 'create';
      console.log('create')
    }else {
      status = 'edit';
      params['id'] = this.id;
      console.log('edit')
    }
    console.log(status)
    this.service.setstaff(params, status)
    .subscribe(res => {
      localStorage.setItem('alerts', "1");
      this.router.navigate(['staff']);
      console.log(res)
    }, err => console.log(err))

  }
}
