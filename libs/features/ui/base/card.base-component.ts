import { BaseComponent } from '@exps/core';
import { Input, ContentChild, TemplateRef } from '@angular/core';

export abstract class CardBaseComponent extends BaseComponent {
	/**
	 * * Public Properties
	 */

	@Input()
	public title: string;
	@Input()
	public content: string;

	@ContentChild('cardTitle', { static: false })
	public cardTitleRef: TemplateRef<any>;

	@ContentChild('cardContent', { static: false })
	public cardContentRef: TemplateRef<any>;

	/**
	 * * Private Properties
	 */

	constructor() {
		super();
	}
}
