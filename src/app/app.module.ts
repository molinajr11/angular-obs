import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { DataService } from './services/data.service';
import { AppRoutingModule } from './routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [DataService],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    HijoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
