import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Image interpolation/binding
  imageUrl:string="assets/gudgud.png"; 
  imageW: number = 110;
  imageH: number = 100;
}
