import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { UISharedModule } from '@exps/features';
import { UI_COMPONENTS } from './components';

const MODULES = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, UISharedModule];

@NgModule({
	imports: [...MODULES],
	declarations: [...UI_COMPONENTS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [...MODULES, ...UI_COMPONENTS],
})
export class UIModule {}
