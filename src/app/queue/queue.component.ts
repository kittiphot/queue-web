import { Component, OnInit } from '@angular/core';
import { DateTimeService } from '../shared/services/datetime.service';
import { SettingsService } from '../shared/services/settings.service';
import { QueueService } from '../shared/services/queue.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
    private time :any
    private myQueue :any
    private queueFormat : any 
    private temps: any
    private callTime : any 
    private queueAmount : any
    
    constructor(
        private dateTimeService: DateTimeService,
        private settingsService: SettingsService,
        private queueService: QueueService,
        private route: ActivatedRoute) {
    }

    ngOnInit() { 
        this.myQueue = this.route.snapshot.paramMap.get('queue');
        let $queue = this.myQueue;
        this.getTime();
        this.getTemp();
        this.getSettings();
        this.getleftQueue($queue);
    }

    getTime() {
        this.dateTimeService.getTime().subscribe(res => {
          // console.log(res)
          this.time = res;
        }, err => console.log(err))
      }

      getSettings() {
        this.settingsService.getSettings().subscribe(res => {
          console.log(res)
          this.queueFormat = res['0']['value']
        }, err => console.log(err))
      }

      getTemp() {
        this.queueService.getTemp().subscribe(res => {
          console.log(res)
          this.temps = res['0']['queue']
        }, err => console.log(err))
      }

       getleftQueue($queue){
         this.queueService.getleftQueue($queue).subscribe(res => {
           console.log(res)
           this.queueAmount = res
         }, err => console.log(err))
       }
}
