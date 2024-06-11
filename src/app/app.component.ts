
// app.component.ts

import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { ControlFlowDemoComponent } from './control-flow-demo/control-flow-demo.component';

@Component({
  selector: 'corp-root',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardActionsComponent,
    ControlFlowDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular-standalone-components';
}

