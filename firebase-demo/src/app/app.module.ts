import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from "./shared/customer.service";
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ImportantContactsComponent } from './important-contacts/important-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,

    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ContactsPageComponent,
    ImportantContactsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
    FormsModule
  ],
  
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
