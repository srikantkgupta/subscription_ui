import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { GridPrototypeComponent } from './grid-prototype/grid-prototype.component';
import { AgGridModule } from 'ag-grid-angular';
// import { ModalsService } from './modal.service';
// import{ModalPopUpComponent} from './modal.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderComponent,
    TabComponent,
    ContactListComponent,
    UserAccountComponent,
    GridPrototypeComponent,
    // ModalPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule.forRoot(),
    AgGridModule.withComponents(null), 
    
  ],
  // providers: [ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
