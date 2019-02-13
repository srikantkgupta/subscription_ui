import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {TabComponent} from './tab/tab.component';
import {ProductsComponent} from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAccountComponent} from './user-account/user-account.component';
import { GridPrototypeComponent} from './grid-prototype/grid-prototype.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tab', component: TabComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'useraccount', component: UserAccountComponent },
  { path: 'grid', component: GridPrototypeComponent },  
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
