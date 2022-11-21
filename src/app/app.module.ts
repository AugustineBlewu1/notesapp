import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    MainLayoutComponent,
    NotesAppComponent,
    NotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
