import { NgModule } from '@angular/core';
import { ExpsElectronCoreModule } from '@exps/electron';
import { AppModule } from './app.module';
import { AppElectronRoutingModule } from './app-routing.electron.module';
import { AppComponent } from './app.component';

@NgModule({
	imports: [AppModule, AppElectronRoutingModule, ExpsElectronCoreModule],
	bootstrap: [AppComponent],
})
export class AppElectronModule {}
