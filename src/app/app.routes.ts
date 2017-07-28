import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthService } from './services/auth.service';
import { ComponentAuxComponent } from './component-aux/component-aux.component';
const routes: Routes = [
  // { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  { path: 'component-two', component: ComponentTwoComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent,
  children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'specs', component: SpecsComponent }
  ]
},
{
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [AuthService],
  },
  {
      path: 'component-aux',
      component: ComponentAuxComponent,
      outlet: 'sidebar',
    },


];

export const routing = RouterModule.forRoot(routes);
