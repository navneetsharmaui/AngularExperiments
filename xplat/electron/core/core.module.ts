import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@exps/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS]
})
export class ExpsElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ExpsElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'ExpsElectronCoreModule');
  }
}
