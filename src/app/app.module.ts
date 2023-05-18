import { NgModule } from '@angular/core';
import { BrowserModule, Routes } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'hero/:id', component: HeroDatailComponent },
  { path: '', redirectTo: '/hero/12', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

