import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MenuComponent, FooterComponent } from '@exps/web';

@NgModule({
	imports: [BrowserModule],
	entryComponents: [MenuComponent, FooterComponent],
})
export class UiKitModule {
	constructor(private injector: Injector) {}

	ngDoBootstrap() {
		let component;
		component = createCustomElement(MenuComponent, { injector: this.injector });
		customElements.define('exps-menu', component);
		component = createCustomElement(FooterComponent, { injector: this.injector });
		customElements.define('exps-footer', component);
	}
}
