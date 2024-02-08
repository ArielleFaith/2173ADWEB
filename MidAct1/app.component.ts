import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midterm_1';
  presentDate = new Date();
  time$: Observable<Date>;

  date: object = {
    name: 'Faith', age:21, food: 'Pizza',
    language: [
      {lname: '23', level: 'Master'},
      {lname: 'Python', level: 'GrandMaster'},
      {lname: 'Cold', level: 'Silver'},
    ]
  }

  price : number = 20000;

  Fruits = [" Apple ", " Orange ", " Grapes ", " Mango ", " Kiwi ", " Pomegranate "];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  ngOnInit(){}

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}
}
a: number = 0.259;
b: number = 1.3495;
c: number = 0.300;

  constructor(){
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }
    }
