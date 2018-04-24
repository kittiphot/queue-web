import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AuthenService } from '../shared/services/authen.service'
import { ConfigService } from '../shared/services/config.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  staff: any
  serviceBoxs: any

  constructor(
    public router: Router,
    private authenService: AuthenService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.getServiceBox();
  }

  getServiceBox() {
    this.configService.getServicebox().subscribe(res => {
      console.log(res)
      this.serviceBoxs = res
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = {
      username: myform.value.username,
      password: myform.value.password
    }
    this.authenService.getAuthen(params).subscribe(res => {
      // console.log(res['0'])
      let logged_profile = JSON.stringify(res['0']);
      localStorage.setItem('logged_profile', logged_profile);
      if (res['length'] != 0) {
        if (res['0']['type'] == 1) {
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['/dashboard']);
        }
        else {
          if (myform.value.serviceBox != 0) {
            this.configService.getServiceboxById(myform.value.serviceBox).subscribe(res => {
              // console.log(res)
              localStorage.setItem('idServiceBox', myform.value.serviceBox);
              localStorage.setItem('nameServiceBox', res['name']);
              this.router.navigate(['staffScreen']);
            }, err => console.log(err))
          }
        }
      }
    }, err => console.log(err))
  }

  // onLoggedin() {
  //   localStorage.setItem('isLoggedin', 'true');
  //   console.log('name');
  //   this.router.navigate(['/dashboard']);
  // }
}
