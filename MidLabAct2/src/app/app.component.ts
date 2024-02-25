import { Component } from '@angular/core';
import { Observable, of, map, interval, fromEvent, from, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$: Observable<Number>;
  constructor() {}
}

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

numbers$.subscribe((value) => console.log(value));

// 1. Operations Examples

numbers$
  .pipe(map((value) => value * 3))
  .subscribe((value) => console.log(value));

// 2. Interval
const interval$ = interval(1000);

interval$.subscribe((val) => console.log('Stream ' + val));

const click$ = fromEvent(document, 'click');

click$.subscribe((evt) => console.log('Mouse clicked' + evt));

// 3. Define an objetc called users

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];

const users$ = from(users);
users$.subscribe((user) => console.log(user));

users$
  .pipe(filter((user) => user.age <= 30))
  .subscribe((user) => console.log(user));

// Display all users whose age is greater than 30 and convert each name to uppercase
users$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      age: user.age > 30,
    }))
  )
  .subscribe((user) => console.log(user));
