import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'data-binding';
  clientName = 'Faith';
  appliedCSS = 'green';
  notAppliedCSS = 'false';
  myColor = 'purple';

  //EVENT BINDING
  showData($event: any){
    console.log('Button is clicked:');
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  //CLICK COUNT
  clickCount=0
  clickMe(){
    this.clickCount++;
  }
}

