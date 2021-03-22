import { from, Observable, of, pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {




  constructor() {

  }

  ngOnInit(): void {
  

    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });
     
    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
  }

}