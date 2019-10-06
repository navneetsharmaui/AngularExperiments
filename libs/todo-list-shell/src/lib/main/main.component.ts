import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@exps/core';

@Component({
	selector: 'exps-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent implements OnInit {
	/**
	 * Public Properties
	 */

	/**
	 * * Private Properties
	 */
	constructor() {
		super();
		this._constructorInitializations();
	}

	/**
	 * * LifeCycleHooks
	 */
	ngOnInit(): void {
		this._ngOnInitInitializations();
	}

	/**
	 * * Public Methods
	 */

	/**
	 * * Private Methods
	 */
	private _constructorInitializations = (): void => {};

	private _ngOnInitInitializations = (): void => {};
}
