import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../../shared/services/Config.service'

import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './edit-staff.component.html',
})
export class EditStaffComponent {
    
    id: any;
    data: any;
    // fulldata: Array<{id:any,name:any,username:any,password:any,type:any,status:any}>;

    constructor(public service: ConfigService, private router: Router,private route: ActivatedRoute) {

        }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id != null){
            this.service.findStaff(this.id).subscribe(res => {
                console.log(res)
                this.data = res
              }, err => console.log(err))
        }
    }

     onSubmit(myform: NgForm) {
        console.log(myform.value)
      }
}
