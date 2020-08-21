import { BrowserModule } from '@angular/platform-browser';
// import '@angular/compiler';
import { Router, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: HomeViewComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'home', component: HomeListComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
