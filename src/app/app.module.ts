import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdsServices } from './services/ads'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { LoginComponent } from './components/login.component';
import { AdsListComponent } from './components/adsList.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/authGuard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, LoginComponent, AdsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [AdsServices, AuthGuard],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
