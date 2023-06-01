import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './SHARED/Components/home/home.component';
import { NavbarComponent } from './SHARED/Components/navbar/navbar.component';
import { SeparacionArchivosComponent } from './SHARED/Components/separacion-archivos/separacion-archivos.component';
import { NotFoundComponent } from './HELPS/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SeparacionArchivosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
