import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./features/home/home.module').then(
				(mod) => mod.HomeModule
			),
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			onSameUrlNavigation: 'reload',
			useHash: true,
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppElectronRoutingModule {}