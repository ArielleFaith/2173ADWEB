import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponentmsg = 'Entered in new component';
  constructor(private myservice: MyServiceService) {}

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }
}
