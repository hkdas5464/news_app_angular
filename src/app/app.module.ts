import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent,
    NavBarComponent,
    TopHeadlinesComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}
