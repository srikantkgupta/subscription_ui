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
import { GlobalServiceService} from './global-service.service'
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AgGridModule } from 'ag-grid-angular';
import { ModalsService } from './modal.service';
import{ModalPopUpComponent} from './modal.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderComponent,
    TabComponent,
    ContactListComponent,
    ModalPopUpComponent,
  ],

  imports: [
    BrowserModule,FormsModule,HttpClientModule,HttpModule,
    AppRoutingModule,NgbModule.forRoot(),  
    AgGridModule.withComponents(null)  
  ],
  
  providers: [GlobalServiceService,ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
