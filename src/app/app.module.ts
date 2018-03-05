import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AdsServices } from './services/ads'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponentModule } from 'ng2-component-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header.component';
import { FooterComponent } from './components/shared/footer.component';
import { LoginComponent } from './components/shared/login.component';
import { AdsListComponent } from './components/adsList.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/authGuard';

import { DialogModule } from 'primeng/primeng';
import { SuccessComponent } from './components/success.component';
import { CheckoutComponent } from './components/checkout.component';
import { OfferDetailsComponent } from './components/offerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, LoginComponent,
    AdsListComponent, SuccessComponent, CheckoutComponent, OfferDetailsComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes),
    DialogModule, SpinnerComponentModule
  ],
  providers: [AdsServices, AuthGuard],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
