import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@exps/web';

@Component({
  selector: 'exps-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
