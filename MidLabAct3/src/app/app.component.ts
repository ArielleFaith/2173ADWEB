import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todaydate;
  constructor(private myservice: MyServiceService) {
    this.todaydate = this.myservice.showTodayDate();
  }
}
