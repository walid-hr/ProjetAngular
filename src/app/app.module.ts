import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './pere/fils/fils.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PereComponent,
    FilsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
