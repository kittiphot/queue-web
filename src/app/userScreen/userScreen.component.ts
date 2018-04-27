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

  constructor(
    public router: Router,
    private queueService: QueueService,
    private settingsService: SettingsService,
    private dateTimeService: DateTimeService
  ) {
    this.idQueue = "0"
    this.queue = "0"
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
      // if (this.idQueue == "0" && this.queue == "0") {
      //   this.idQueue = res['0']['id']
      //   this.queue = res['0']['queue']
      // }
      if (this.idQueue != res['0']['id']) {
        if (this.queue == res['0']['queue']) {
          this.idQueue = res['0']['id']
          this.substring()
        }
        if (this.queue != res['0']['queue']) {
          this.idQueue = res['0']['id']
          this.queue = res['0']['queue']
          this.substring()
        }
      }
    }, err => console.log(err))
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(res => {
      // console.log(res)
      this.queueFormat = res['0']['value']
    }, err => console.log(err))
  }

  substring() {
    for (let index = 0; index < this.queueFormat.length; index++) {
      const element = this.queueFormat[index];
      // console.log(element)
      this.playSound(element, index)
    }
    for (let index = 0; index < this.queue.length; index++) {
      const element = this.queue[index];
      // console.log(element)
      this.playSound(element, index)
    }
  }

  playSound(param, index) {
    let path
    if (param == 2) {
      path = 'assets/sounds/2.mp3'
    }
    if (param == 3) {
      path = 'assets/sounds/3.mp3'
    }
    this.sound = new Howl({
      src: [
        path,
      ],
      // autoplay: true,
      volume: 1,
    });
    console.log(path)
    // if (index == 0) {
    //   this.sound = new Howl({
    //     src: [
    //       path,
    //     ],
    //     volume: 1,
    //   });
    //   this.sound.play()
    // }
    // else {
    //   console.log(path)
    //   this.sound.on('end', function () {
    //     this.sound.play()
    //   });
    // }
  }

}
