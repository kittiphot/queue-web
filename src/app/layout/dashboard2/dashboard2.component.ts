import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/Config.service'
import { QueueService } from '../../shared/services/queue.service'

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  animations: [routerTransition()]
})
export class Dashboard2Component implements OnInit {
  private data: any
  private todo: any
  private count_list: any

  constructor(private service: QueueService) {

  }

  ngOnInit() {
    this.service.getLast().subscribe(res => {
      console.log(res)
      this.data = res
    }, err=> console.log(err))
    this.service.getCountTodoInList().subscribe(res => {
      // console.log(res)
      this.todo = res
    }, err=> console.log(err))
    this.service.getCountListAllDay().subscribe(res => {
      // console.log(res)
      this.count_list = res
    }, err=> console.log(err))
  }


  gotoEdit(){
    
  }
}
