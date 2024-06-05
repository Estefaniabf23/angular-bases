import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Iron Man', 'Thorn', 'Loky'];
  public deleteHero?:string;

  removeLastHero():void{
    const deletedHero = this.heroNames.pop();

  }
}
