import { NgModule } from '@angular/core';
import { ExpsElectronCoreModule } from '@exps/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ExpsElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
