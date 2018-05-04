import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'
import { Howl } from 'howler';

@Component({
  selector: 'app-userScreen',
  templateUrl: './userScreen.component.html',
  styleUrls: ['./userScreen.component.scss'],
  animations: [routerTransition()]
})
export class UserScreenComponent implements OnInit {
  private temps: any
  private queueFormat: any
  private date: any
  private time: any
  private queue: any
  private idQueue: any
  private sound: any
  private idServiceBox: any
  private delay: any

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
    this.idQueue = "0"
    this.queue = "0"
    this.delay = 0
  }

  ngOnInit() {
    this.getTemp();
    this.getTime();
    this.getDate();
  }

  getDate() {
    this.dateTimeService.getDate().subscribe(res => {
      // console.log(res)
      this.date = res;
    }, err => console.log(err))
  }

  getTime() {
    this.dateTimeService.getTime().subscribe(res => {
      // console.log(res)
      this.time = res;
    }, err => console.log(err))
  }

  getTemp() {
    this.getSettings();
    this.queueService.getTemp().subscribe(res => {
      // console.log(res)
      this.temps = res
      if (this.idQueue == "0" && this.queue == "0") {
        this.idQueue = res['0']['id']
        this.queue = res['0']['queue']
      }
      if (this.idQueue != res['0']['id']) {
        if (this.queue == res['0']['queue']) {
          this.idQueue = res['0']['id']
          this.idServiceBox = res['0']['id_service_box']
          this.substring()
        }
        if (this.queue != res['0']['queue']) {
          this.idQueue = res['0']['id']
          this.queue = res['0']['queue']
          this.idServiceBox = res['0']['id_service_box']
          this.substring()
        }
      }
      this.delay = 0
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      // console.log(res)
      this.queueFormat = res['0']['value']
    }, err => console.log(err))
  }

  substring() {
    this.playSound("เชิญหมายเลข")
    this.delay += 2000;
    for (let index = 0; index < this.queueFormat.length; index++) {
      this.playSound(this.queueFormat[index])
      this.delay += 1500;
    }
    for (let index = 0; index < this.queue.length; index++) {
      this.playSound(this.queue[index])
      this.delay += 1500;
    }
    this.playSound("ที่ช่องบริการที่")
    this.delay += 2000;
    this.playSound(this.idServiceBox)
    console.log(this.idServiceBox)
    this.delay += 1000;
    this.playSound("ค่ะ")
  }

  playSound(param) {
    setTimeout(function () {
      var sound = new Howl({
        src: [
          'assets/sounds/' + param + '.mp3'
        ],
        autoplay: true,
        volume: 1,
      });
    }, this.delay);
  }

}
