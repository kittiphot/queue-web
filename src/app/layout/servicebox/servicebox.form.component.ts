import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConfigService } from '../../shared/services/Config.service'
import { ActivatedRoute, Router } from '@angular/router';

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

  // onSubmit(myform: NgForm) {
  //   console.log(params);
  //   this.service.(params, status)
  //     .subscribe(res => {
  //       this.router.navigate(['restaurants']);
  //       console.log(res)
  //     }, err => console.log(err))
  // }
}
