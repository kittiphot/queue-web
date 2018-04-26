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
  public lineChartData: Array<any> = [
    { data: [], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];

  constructor(private service: QueueService) {

  }

  ngOnInit() {
    this.service.getTemp().subscribe(res => {
      // console.log(res)
      this.data = res
    }, err=> console.log(err))
    this.service.getCountTodoInList().subscribe(res => {
      // console.log(res)
      this.todo = res
    }, err=> console.log(err))
    this.service.getCountListAllDay().subscribe(res => {
      console.log(res)
      this.count_list = res
    }, err=> console.log(err))
    this.service.getCountQueuehour().subscribe(res => {
      console.log(res)
      let value8 = res['time_08']
      let value9 = res['time_09']
      let value10 = res['time_10']
      let value11 = res['time_11']
      let value12 = res['time_12']
      let value13 = res['time_13']
      let value14 = res['time_14']
      let value15 = res['time_15']
      let value16 = res['time_16']
      let value17 = res['time_17']
      this.lineChartData = [
        { data: [value8,value9,value10,value11,value12,value13,value14,value15,value16,value17], label: 'Series A' },
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
    //   console.log(this.i)
    }, err=> console.log(err))
  }

  public lineChartLabels: Array<any> = [
    '08.00',
    '09.00',
    '10.00',
    '11.00',
    '12.00',
    '13.00',
    '14.00',
    '15.00',
    '16.00',
    '17.00',
];
public lineChartOptions: any = {
    responsive: true
};
public lineChartColors: Array<any> = [
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    // {
    //     // dark grey
    //     backgroundColor: 'rgba(77,83,96,0.2)',
    //     borderColor: 'rgba(77,83,96,1)',
    //     pointBackgroundColor: 'rgba(77,83,96,1)',
    //     pointBorderColor: '#fff',
    //     pointHoverBackgroundColor: '#fff',
    //     pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // {
    //     // grey
    //     backgroundColor: 'rgba(148,159,177,0.2)',
    //     borderColor: 'rgba(148,159,177,1)',
    //     pointBackgroundColor: 'rgba(148,159,177,1)',
    //     pointBorderColor: '#fff',
    //     pointHoverBackgroundColor: '#fff',
    //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
];
public lineChartLegend: boolean = true;
public lineChartType: string = 'line';

// events
public chartClicked(e: any): void {
    // console.log(e);
}

public chartHovered(e: any): void {
    // console.log(e);
}



}
