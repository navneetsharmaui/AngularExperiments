import { Component } from '@angular/core';

import { BaseComponent } from '@exps/core';

@Component({
	selector: 'exps-footer',
	templateUrl: 'footer.component.html',
})
export class FooterComponent extends BaseComponent {
	constructor() {
		super();
	}
}
