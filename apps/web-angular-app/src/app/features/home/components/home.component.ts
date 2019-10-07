import { Component, OnInit } from '@angular/core';

import { BaseComponent, LogService } from '@exps/core';
import { IMessage } from '@exps/api-interfaces';
import { Observable } from 'rxjs';
import { isElectron } from '@exps/utils';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'exps-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
	/**
	 * Public Properties
	 */
	// public hello$: Observable<IMessage> = this.http.get<IMessage>('/api/hello');
	public isElectron = isElectron();

	/**
	 * * Private Properties
	 */
	constructor(private http: HttpClient, private _router: Router, private _logger: LogService) {
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

	public goPlaces(): void {
		const url: string = this.isElectron ? 'desktoplandingview' : 'weblandingview';
		const platform: string = this.isElectron ? 'Electron' : 'Browser';
		this._logger.info(`Going to route ${url} because platform is ${platform}`);
		this._router.navigateByUrl(url);
	}

	/**
	 * * Private Methods
	 */
	private _constructorInitializations = (): void => {};

	private _ngOnInitInitializations = (): void => {
		this._logger.debug('Is deskotop platform: ', this.isElectron);
	};
}
