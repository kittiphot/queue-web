import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthenService } from '../../../shared/services/authen.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';

  constructor(
    private translate: TranslateService,
    public router: Router,
    private authenService: AuthenService
  ) {

    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() { }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  setLogged(params) {
    this.authenService.setLogged(params).subscribe(res => {
      console.log(res)
    }, err => console.log(err))
  }

  onLoggedout() {
    let idStaff = JSON.parse(localStorage.getItem('logged_profile'))['id']
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('logged_profile');
    localStorage.removeItem('idServiceBox');
    localStorage.removeItem('nameServiceBox');
    let params = {
      id: idStaff,
      logged: 0
    }
    this.setLogged(params);
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
