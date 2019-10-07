import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// libs
import { environment } from '@exps/core';

// app
import { SharedModule } from './features/shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

@NgModule({
	declarations: [AppComponent],
	exports: [SharedModule],
	imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule, HttpClientModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
})
export class AppModule {}
