import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import { ToastrService } from 'ngx-toastr';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import { HttpClient } from '@angular/common/http';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  StripePaymentElementOptions,
  PaymentIntent,
} from '@stripe/stripe-js';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  eventId: any;
  advertisementDetails: any = [];
  boothDetails: any = [];
  contactDetails: any;
  eventDetails: any;
  contactDetailsErr: boolean = false;
  boothCharges: any = 0;
  advertisementCharges: any = 0;

  @ViewChild(StripeCardNumberComponent)
  card!: StripeCardNumberComponent;

  cardHolderName: string = '';
  paymentProcessing: boolean = false;

  paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: false,
    },
  };

  cardOptions: StripeCardElementOptions = {
    classes: {
      base: 'form-control',
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    appearance: {
      theme: 'flat',
    },
  };

  constructor(
    private router: Router,
    private apiService: ApiService,
    private toastr: ToastrService,
    private eventService: EventService,
    private stripeService: StripeService,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventService.getEventId().subscribe((data: any) => {
      this.eventId = data;
    });

    this.eventService.getEventDetails().subscribe((data: any) => {
      this.eventDetails = data;
    });

    this.eventService.getBoothDetails().subscribe((data: any) => {
      this.boothDetails = data;
      if (this.boothDetails) {
        this.boothCharges = 0;
        this.boothDetails.forEach((content: any) => {
          this.boothCharges += Number(content.boothCategory.price);
        });
      }
    });

    this.eventService.getAdvertisementDetails().subscribe((data: any) => {
      this.advertisementDetails = data;
      if (this.advertisementDetails) {
        this.advertisementCharges = 0;
        this.advertisementDetails.forEach((content: any) => {
          this.advertisementCharges += Number(content.advertisement.price);
        });
      }
    });

    this.eventService.getContactDetails().subscribe((data: any) => {
      this.contactDetails = data;
    });

    this.checkBoothDetails();
    this.checkContactDetails();
  }

  checkBoothDetails() {
    if (!this.boothDetails || this.boothDetails.length == 0) {
      this.toastr.error('Please select the desired booth for booking');
    }
  }

  checkContactDetails() {
    let contactDetailsErr = false;
    var errMsg =
      'Please complete all the necessary fields in the contact form.';
    if (!this.contactDetails) {
      contactDetailsErr = true;
    } else {
      if (this.contactDetails.companyName == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.firstName == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.lastName == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.address == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.city == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.country == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.state == '') {
        contactDetailsErr = true;
      } else if (this.contactDetails.phoneOffice == '') {
        contactDetailsErr = true;
      } else if (
        this.contactDetails.email == '' ||
        !this.contactDetails.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        contactDetailsErr = true;
        errMsg = "The email you entered isn't in the right format.";
      } else if (this.contactDetails.businessType == '') {
        contactDetailsErr = true;
      }
    }

    if (contactDetailsErr) {
      this.contactDetailsErr = true;
      this.toastr.error(errMsg);
    } else {
      this.contactDetailsErr = false;
    }
  }

  checkBooths() {
    this.paymentProcessing = true;
    const booths: any = [];
    this.boothDetails.forEach((element: any) => {
      booths.push(element.boothNo);
    });

    const data = {
      path: 'booths/check/multiple',
      payload: {
        boothsNo: booths,
      },
    };
    this.apiService.postRequest(data).subscribe((response: any) => {
      this.paymentProcessing = false;

      const data = response.data;
      const availableBooths = data.availableBooths;
      const notAvailableBooths = data.notAvailableBooths;

      if (availableBooths.length > 0 && notAvailableBooths.length == 0) {
        /**
         * Start Payment Processing
         */
        this.pay(booths);
      } else if (availableBooths.length == 0) {
        /**
         * Payment already made for the selected booths
         */
        this.toastr.error(
          'The booths you have chosen already purchased by someone else',
          'Error!'
        );
        this.toastr.info('Please choose alternate booths.', 'Info!');
        this.eventService.setBoothDetails([]);
      } else {
        /**
         * One booth is available and one is already sold
         */
        var boothNo: any;
        notAvailableBooths.forEach((element: any) => {
          boothNo = element.boothNo;
        });

        this.toastr.error(
          'The booth( ' +
            boothNo +
            ' ) you have chosen already been purchased by someone else',
          'Error!'
        );

        const updatedBooths = this.boothDetails.filter(
          (booth: any) => booth.boothNo !== boothNo
        );
        this.eventService.setBoothDetails(updatedBooths);
      }
    });
  }

  confirmBooking(paymentIntentId: any) {
    if (!this.contactDetails) {
      this.toastr.error('Kindly enter contact details');
    } else {
      const advertisements: any = [];
      if (this.advertisementDetails)
        this.advertisementDetails.forEach((element: any) => {
          advertisements.push(element.advertisement.id);
        });

      const booths: any = [];
      this.boothDetails.forEach((element: any) => {
        booths.push(element.boothId);
      });

      const data = {
        path: 'booking/create',
        payload: {
          eventId: this.eventId,
          status: 'Success',
          totalPayment: this.boothCharges + this.advertisementCharges,
          registrationMethod: 'Online',
          paymentMethod: 'Card',
          referenceNo: paymentIntentId,

          companyName: this.contactDetails.companyName,
          firstName: this.contactDetails.firstName,
          lastName: this.contactDetails.lastName,
          address: this.contactDetails.address,
          city: this.contactDetails.city,
          state: this.contactDetails.state,
          country: this.contactDetails.country,
          zipcode: this.contactDetails.zipcode,
          phoneOffice: this.contactDetails.phoneOffice,
          phoneHome: this.contactDetails.phoneHome,
          fax: this.contactDetails.fax,
          email: this.contactDetails.email,
          businessType: this.contactDetails.businessType,
          booths,
          advertisements,
        },
      };
      this.apiService.postRequest(data).subscribe((response: any) => {
        const data = response.data;

        if (data.status == 'Success') {
          this.toastr.success('Booking Completed');
          this.router.navigate(['/confirmation', data.id]);
        } else {
          this.toastr.success('Something went wrong, please try again later');
        }

        this.paymentProcessing = false;
      });
    }
  }

  pay(booths: any): void {
    this.paymentProcessing = true;
    const amount = this.boothCharges + this.advertisementCharges;
    this.createPaymentIntent(amount)
      .pipe(
        switchMap((pi: any) =>
          this.stripeService.confirmCardPayment(pi.clientSecret, {
            payment_method: {
              card: this.card.element,
              billing_details: {
                name: this.cardHolderName, // Cardholder's name
                email: this.contactDetails.email,
                phone: this.contactDetails.phoneOffice,
                address: {
                  line1: this.contactDetails.address,
                  city: this.contactDetails.city,
                  postal_code: this.contactDetails.zipcode,
                },
              },
            },
          })
        )
      )
      .subscribe((result: any) => {
        console.log(result);
        if (result.error) {
          this.toastr.error(result.error.message, 'Error!');
          this.paymentProcessing = false;

          // Reset booths status to available
          const data = {
            path: 'booths/update/booths',
            payload: {
              boothNo: booths,
              status: 'Y',
            },
          };
          this.apiService.postRequest(data).subscribe((response: any) => {
            console.log(
              'Error in Payment! so reset the booth status to availble'
            );
          });
        } else {
          // The payment has been processed!
          const paymentIntent = result.paymentIntent;
          if (paymentIntent.status === 'succeeded') {
            const paymentIntentId = paymentIntent.id;
            this.confirmBooking(paymentIntentId);
          }
        }
      });
  }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${environment.ApiBaseURL}auth/stripe/create-payment-intent`,
      { amount }
    );
  }
}
