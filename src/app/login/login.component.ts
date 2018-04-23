import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AuthenService } from '../shared/services/authen.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  staff: any

  constructor(
    public router: Router,
    private service: AuthenService,
  ) { }

  ngOnInit() { }

  // onLoggedin() {
  //   localStorage.setItem('isLoggedin', 'true');
  //   console.log('name');
  //   this.router.navigate(['/dashboard']);
  // }

  getstaff(params) {
    this.service.getAuthen(params).subscribe(res => {
      // console.log(res)
      this.staff = res
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = {
      username: myform.value.username,
      password: myform.value.password
    }
    this.service.getAuthen(params).subscribe(res => {
      console.log(res['0'])
      let logged_profile = JSON.stringify(res['0']);
      localStorage.setItem('logged_profile', logged_profile);
      if (res['length'] != 0) {
        if (res['0']['type'] == 1) {
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['/dashboard']);
        }
        else {
          if (myform.value.serviceBox != 0) {
            localStorage.setItem('idServiceBox', myform.value.serviceBox);
            this.router.navigate(['staffScreen']);
          }
        }
      }
    }, err => console.log(err))
  }
}
