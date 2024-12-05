import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { BazaarComponent } from './modules/bazaar/bazaar.component';
import { BoothSelectionComponent } from './modules/booth-selection/booth-selection.component';
import { AdvertisementComponent } from './modules/advertisement/advertisement.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { ConfirmationComponent } from './modules/confirmation/confirmation.component';
import { IndexComponent } from './modules/index.component';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'bazaar', component: BazaarComponent },
      { path: 'booth-selection', component: BoothSelectionComponent },
      { path: 'advertisement', component: AdvertisementComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'confirmation/:id', component: ConfirmationComponent },
      { path: 'admin', component: AdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
