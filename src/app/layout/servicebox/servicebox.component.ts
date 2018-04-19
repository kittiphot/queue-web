import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.component.html',
  styleUrls: ['./servicebox.component.scss'],
  animations: [routerTransition()]
})
export class ServiceboxComponent implements OnInit {
  private temps: any

  constructor(private service: ConfigService) {

  }

  ngOnInit() { 
    // this.getTemp();
  }

  // getTemp() {
  //   this.service.getservicebox().subscribe(res => {
  //     console.log(res)
  //     this.temps = res
  //   }, err => console.log(err))
  // }
}
