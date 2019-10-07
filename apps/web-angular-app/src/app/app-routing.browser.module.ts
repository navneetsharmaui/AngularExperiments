import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () => import('./features/home/home.module').then((mod) => mod.HomeModule),
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forRoot(routes, {
			onSameUrlNavigation: 'reload',
			useHash: true,
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppBrowserRoutingModule {}
