import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { QueueService } from '../../shared/services/queue.service'

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
  animations: [routerTransition()]
})
export class QueueComponent implements OnInit {
  private temps: any
  private lists: any

  constructor(private queueService: QueueService) {

  }

  ngOnInit() { 
    this.getTemp();
    this.getList();
  }

  getTemp() {
    this.queueService.getTemp().subscribe(res => {
      console.log(res)
      this.temps = res
    }, err => console.log(err))
  }

  getList() {
    this.queueService.getList().subscribe(res => {
      console.log(res)
      this.lists = res
    }, err => console.log(err))
  }

  createQueue() {
    this.queueService.createQueue().subscribe(res => {
      console.log(res)
      this.lists = res
    }, err => console.log(err))
    this.getTemp();
    this.getList();
  }

  callQueue() {
    this.queueService.callQueue().subscribe(res => {
      console.log(res)
      this.lists = res
    }, err => console.log(err))
    this.getTemp();
    this.getList();
  }

}
