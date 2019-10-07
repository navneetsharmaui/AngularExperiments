import { Component, OnInit } from '@angular/core';

// xplat
import { AppBaseComponent } from '@exps/web';
import { Observable } from 'rxjs';
import { isElectron } from '@exps/utils';
import { HttpClient } from '@angular/common/http';
import { LogService } from '@exps/core';
import { IMessage } from '@exps/api-interfaces';
import { Router } from '@angular/router';

@Component({
	selector: 'exps-root',
	templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent implements OnInit {
	/**
	 * * Public Properties
	 */
	public isElectron = isElectron();

	/**
	 * * Private Properties
	 */

	/**
	 * * Constructor
	 * @param {http} of type `HttpClient`
	 * @param {_router} of type `Router`
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
