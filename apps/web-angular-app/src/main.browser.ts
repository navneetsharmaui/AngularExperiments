// Custom Elements
import '@exps/ui';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// libs
import { environment } from '@exps/core';

// app
import { AppBrowserModule } from './app/app.browser.module';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppBrowserModule)
	.catch((err) => console.error(err));
