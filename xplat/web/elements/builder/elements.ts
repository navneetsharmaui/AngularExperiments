import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UiKitModule } from '../ui-kit.module';

platformBrowserDynamic()
	.bootstrapModule(UiKitModule)
	.catch((err) => console.log(err));
