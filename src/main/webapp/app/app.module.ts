import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { IqsSharedModule } from 'app/shared/shared.module';
import { IqsCoreModule } from 'app/core/core.module';
import { IqsAppRoutingModule } from './app-routing.module';
import { IqsHomeModule } from './home/home.module';
import { IqsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    IqsSharedModule,
    IqsCoreModule,
    IqsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    IqsEntityModule,
    IqsAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class IqsAppModule {}
