import { Component } from '@angular/core';

import { BaseComponent } from '@exps/core';

@Component({
	selector: 'exps-dropdown',
	templateUrl: 'dropdown.component.html',
})
export class DropdownComponent extends BaseComponent {
	constructor() {
		super();
	}
}
