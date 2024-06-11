import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturedFruitComponent } from '../featured-fruit/featured-fruit.component';

@Component({
  selector: 'corp-control-flow-demo',
  standalone: true,
  imports: [CommonModule, FeaturedFruitComponent],
  template: `
  @if (isLoggedIn) {
    <p>
      <ng-content></ng-content>
    </p>
  }
  <h4>for - control flow</h4>
  @for (fruit of fruits; track fruit.id) {
    <ul>
     <li> {{fruit.name}}</li>
    </ul>
  }
  <corp-featured-fruit fruit= "Orange" (selectedFruitEvent)="selectTheFruit($event)"></corp-featured-fruit>
  <h5>*******child component ends here********</h5>
  <p>The seleted fruit from FeaturedFruitComponent is <span id="emittedFruit" [innerHTML]="emittedFruit"></span></p>
  `,
  styleUrl: './control-flow-demo.component.css'
})
export class ControlFlowDemoComponent {
 isLoggedIn: boolean = true;
 emittedFruit: string = "";
 fruits = [{id: 1, name: "Apple"},
  {id: 2, name: "Mango"},
  {id:3, name: "Orange"}
 ];

 selectTheFruit(fruit: string){
  console.log(`The fruit emitted from child is ${fruit}`);
  this.emittedFruit= fruit;
 }
}
