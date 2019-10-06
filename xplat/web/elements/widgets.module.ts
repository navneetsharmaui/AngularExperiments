import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { DropdownComponent, LinkComponent } from '@exps/web';

@NgModule({
	imports: [BrowserModule],
	entryComponents: [DropdownComponent, LinkComponent],
})
export class WidgetsModule {
	constructor(private injector: Injector) {}

	ngDoBootstrap() {
		let component;
		component = createCustomElement(DropdownComponent, { injector: this.injector });
		customElements.define('exps-dropdown', component);
		component = createCustomElement(LinkComponent, { injector: this.injector });
		customElements.define('exps-link', component);
	}
}
