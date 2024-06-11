import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'corp-featured-fruit',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h4>Child Component</h4>
    <p>
      The selected fruit is {{fruit}}!
    </p>
    <button (click)="handleClick()">Pass the selected fruit</button>
  `,
  styleUrl: './featured-fruit.component.css'
})
export class FeaturedFruitComponent {
   @Input() fruit: string = "";
   @Output() selectedFruitEvent = new EventEmitter<string>();

    handleClick(){
      if(this.fruit != null)
        this.selectedFruitEvent.emit("Kiwi");

}
}
