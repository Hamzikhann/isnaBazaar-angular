import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxStripeModule } from 'ngx-stripe';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { BazaarComponent } from './modules/bazaar/bazaar.component';
import { AdvertisementComponent } from './modules/advertisement/advertisement.component';
import { BoothSelectionComponent } from './modules/booth-selection/booth-selection.component';
import { ConfirmationComponent } from './modules/confirmation/confirmation.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './modules/index.component';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './modules/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BazaarComponent,
    AdvertisementComponent,
    BoothSelectionComponent,
    ConfirmationComponent,
    ContactComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    DataTablesModule,
    NgxStripeModule.forRoot(environment.stripe.publicKey),
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
