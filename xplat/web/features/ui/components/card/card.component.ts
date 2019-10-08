import { Component } from '@angular/core';

import { CardBaseComponent } from '@exps/features';

@Component({
	selector: 'exps-card',
	templateUrl: 'card.component.html',
})
export class CardComponent extends CardBaseComponent {
	constructor() {
		super();
	}
}
