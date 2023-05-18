import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const appRoutes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/hero/12', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

