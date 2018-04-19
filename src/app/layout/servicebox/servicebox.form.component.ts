import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.form.component.html',
  styleUrls: ['./servicebox.component.scss'],
  animations: [routerTransition()]
})
export class ServiceboxFormComponent implements OnInit {
  private data: any

  constructor(private service: ConfigService) {

  }

  ngOnInit() {
    this.service.getServicebox().subscribe(res => {
      console.log(res)
      this.data = res
    }, err=> console.log(err))
  }


  gotoEdit(){
    
  }
}
