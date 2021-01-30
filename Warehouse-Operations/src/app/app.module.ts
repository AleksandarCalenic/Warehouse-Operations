import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/error/error.component';
import { HeadingComponent } from './core/heading/heading.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/navbar/home/home.component';
import { AboutComponent } from './core/navbar/about/about.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaginationComponent } from './documents/pagination/pagination.component';
import { DocumentComponent } from './document/document.component';
import { PanelComponent } from './document/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeadingComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DocumentsComponent,
    PaginationComponent,
    DocumentComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
