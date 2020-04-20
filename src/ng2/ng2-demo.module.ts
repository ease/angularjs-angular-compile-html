import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Ng1DemoComponentFacade } from '../ng1/ng1-demo.component';
import { ng1DemoModule } from '../ng1/ng1-demo.module';
import { Ng2DemoComponent } from './ng2-demo.component';
import { VersionStampComponent } from './version-stamp.component';


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [
    Ng1DemoComponentFacade,
    Ng2DemoComponent,
    VersionStampComponent,
  ],
  entryComponents: [
    Ng2DemoComponent,
  ],
})
export class Ng2DemoModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [ng1DemoModule.name]);
  }
}
