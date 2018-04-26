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
    { data: [], label: '' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartData2: Array<any> = [
      { data: [], label: '' },
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
        { data: [value8,value9,value10,value11,value12,value13,value14,value15,value16,value17], label: 'จำนวน' },
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
    //   console.log(this.i)
    }, err=> console.log(err))

    this.service.getCountQueueDayInMount().subscribe(res => {
      console.log(res)
      let value1 = res['day_01']
      let value2 = res['day_02']
      let value3 = res['day_03']
      let value4 = res['day_04']
      let value5 = res['day_05']
      let value6 = res['day_06']
      let value7 = res['day_07']
      let value8 = res['day_08']
      let value9 = res['day_09']
      let value10 = res['day_10']
      let value11 = res['day_11']
      let value12 = res['day_12']
      let value13 = res['day_13']
      let value14 = res['day_14']
      let value15 = res['day_15']
      let value16 = res['day_16']
      let value17 = res['day_17']
      let value18 = res['day_18']
      let value19 = res['day_19']
      let value20= res['day_20']
      let value21= res['day_21']
      let value22= res['day_22']
      let value23= res['day_23']
      let value24= res['day_24']
      let value25= res['day_25']
      let value26= res['day_26']
      let value27= res['day_27']
      let value28= res['day_28']
      let value29= res['day_29']
      let value30= res['day_30']
      let value31= res['day_31']

      this.lineChartData2 = [
        { data: [value1,value2,value3,value4,value5
          ,value6,value7,value8,value9,value10
          ,value11,value12,value13,value14,value15
          ,value16,value17,value18,value19,value20
          ,value21,value22,value23,value24,value25
          ,value26,value27,value28,value29,value30,value31
        ], label: 'จำนวน' },
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
public lineChartLabels2: Array<any> = [
  'วันที่ 1','วันที่ 2','วันที่ 3','วันที่ 4','วันที่ 5',
  'วันที่ 6','วันที่ 7','วันที่ 8','วันที่ 9','วันที่ 10',
  'วันที่ 11','วันที่ 12','วันที่ 13','วันที่ 14','วันที่ 15',
  'วันที่ 16','วันที่ 17','วันที่ 18','วันที่ 19','วันที่ 20',
  'วันที่ 21','วันที่ 22','วันที่ 23','วันที่ 24','วันที่ 25',
  'วันที่ 26','วันที่ 27','วันที่ 28','วันที่ 29','วันที่ 30',,'วันที่ 31',

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
