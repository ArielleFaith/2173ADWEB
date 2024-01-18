import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //Image interpolation/binding
imageUrl:string="assets/gudgud.png"; 
imageW: number = 110;
imageH: number = 100;

}
