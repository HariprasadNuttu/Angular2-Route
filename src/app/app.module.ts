import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { routing } from './app.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthService } from './services/auth.service';
import { ComponentAuxComponent } from './component-aux/component-aux.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OverviewComponent,
    SpecsComponent,
    AccountsComponent,
    ComponentAuxComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
