import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent } from './components';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'list',
				loadChildren: () => import('@exps/todo-list-shell').then((m) => m.TodoListShellModule),
			},
		],
	},
];

@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes)],
	declarations: [...HOME_COMPONENTS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [...HOME_COMPONENTS],
})
export class HomeModule {}
