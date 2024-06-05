import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'hello world';
  public counter: number = 0;


  IncreaseBy(value: number):void{

    this.counter += value;
  }

  Reset(){

    this.counter = 10;
  }

}
