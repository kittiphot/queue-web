import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../shared/services/config.service'


@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.form.component.html',
  styleUrls: ['./servicebox.component.scss'],
  animations: [routerTransition()]
})
export class ServiceboxFormComponent implements OnInit {
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
    this.id_servicebox = this.route.snapshot.paramMap.get('id_servicebox');
    if (this.id_servicebox != null) {
      this.service.getServiceboxById(this.id_servicebox).subscribe(res => {
        // console.log(res)
        this.value = res
      }, err => console.log(err))
    }
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = myform.value;
    let status = '';
    // console.log('55555555555')
    // console.log(this.id_servicebox)
    if (this.id_servicebox == null) {
      status = 'create';
      console.log('cre')
    } else {
      status = 'edit';
      // console.log(myform.value)
      params['id'] = this.id_servicebox;
      console.log('edi')
    }
    console.log(status)
    this.service.setServicebox2(params, status)
    .subscribe(res => {
      localStorage.setItem('alerts', "1");
      this.router.navigate(['servicebox']);
      console.log(res)
    }, err => console.log(err))
  }
}
