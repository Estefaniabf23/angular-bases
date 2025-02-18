
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  template:  `
  <h3> Counter: {{counter}}</h3>
<button (click)="IncreaseBy(+1)">+1</button>
<button (click)="Reset()">Reset</button>
<button (click)="IncreaseBy(-1)">-1</button>

  `
})

export class CounterComponent {

  public counter: number = 0;


  IncreaseBy(value: number):void{

    this.counter += value;
  }

  Reset(){

    this.counter = 10;
  }


}
