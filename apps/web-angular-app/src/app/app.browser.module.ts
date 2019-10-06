import { NgModule } from '@angular/core';
import { AppBrowserRoutingModule } from './app-routing.browser.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		AppModule,
		AppBrowserRoutingModule,
	],
	bootstrap: [AppComponent],
})
export class AppBrowserModule {}
