import { Component } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  selectedBooking: any;
  bookings: any;
  dtOptions: any;
  userLoggedIn: boolean = false;
  user: any = {
    email: '',
    password: '',
    token: '',
  };

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: [
        {
          extend: 'excel',
          text: 'Export as Excel',
          title: 'ISNA Bazaar 2024 - Bookings',
          exportOptions: {
            columns: ':not(:last-child)',
          },
        },
      ],
      aaSorting: [],
      columnDefs: [
        {
          targets: [1],
          render: (data: any, type: any, full: any, meta: any) => {
            if (type === 'sort') {
              console.log(data, moment(data, 'MMM Do, h:mm A').unix());
              return moment(data, 'MMM Do, h:mm A').unix();
            }
            return data;
          },
        },
      ],
    };
  }

  login() {
    const data = {
      path: 'auth/login',
      payload: {
        email: this.user.email,
        password: this.user.password,
      },
    };
    this.apiService.postRequest(data).subscribe((response) => {
      const data = response.data;
      const token = response.token;

      if (data.user && data.user.id) {
        this.user.token = token;
        this.userLoggedIn = true;

        this.authService.setUserId(data.user.id);
        this.authService.setUser(data.user);
        this.authService.setToken(token);
        this.getBookings();
      }
    });
  }

  getBookings() {
    this.bookings = [];
    const data = {
      path: 'booking/list',
      payload: {},
    };
    this.apiService.postRequest(data).subscribe((response) => {
      this.bookings = response.data;

      this.bookings.forEach((element: any) => {
        element.bookingId = 1000 + element.id;
        element.datetime = moment(element.createdAt).format('MMM Do, h:mm A');
      });
    });
  }

  onRefund(booking: any) {
    const data = {
      path: 'booking/refund',
      payload: {
        referenceNo: booking.bookingPayments[0].referenceNo,
      },
    };

    this.apiService.postRequest(data).subscribe((response) => {
      this.toastr.info(response.message);
      this.getBookings();
    });
  }

  onUpdate(booking: any) {
    const data = {
      path: 'booking/update',
      payload: {
        id: booking.id,
        bookingId: booking.bookingId,
        firstName: booking.bookingContact.firstName,
        lastName: booking.bookingContact.lastName,
        email: booking.bookingContact.email,
        phoneOffice: booking.bookingContact.phoneOffice,
        phoneHome: booking.bookingContact.phoneHome,
        fax: booking.bookingContact.fax,
        address: booking.bookingContact.address,
        city: booking.bookingContact.city,
        state: booking.bookingContact.state,
        zipcode: booking.bookingContact.zipcode,
      },
    };

    this.apiService.postRequest(data).subscribe((response) => {
      this.toastr.info(response.message);
      this.getBookings();
    });
  }

  onSelectedBooking(booking: any) {
    this.selectedBooking = {
      id: booking.id,
      bookingId: booking.bookingId,
      bookingBooths: booking.bookingBooths,
      bookingContact: {
        companyName: booking.bookingContact.companyName,
        businessType: booking.bookingContact.businessType,

        firstName: booking.bookingContact.firstName,
        lastName: booking.bookingContact.lastName,
        email: booking.bookingContact.email,

        phoneHome: booking.bookingContact.phoneHome,
        phoneOffice: booking.bookingContact.phoneOffice,
        fax: booking.bookingContact.fax,

        address: booking.bookingContact.address,
        city: booking.bookingContact.city,
        state: booking.bookingContact.state,
        zipcode: booking.bookingContact.zipcode,

        country: booking.bookingContact.country,
      },
      bookingPayments: booking.bookingPayments,
      status: booking.status,
    };
  }

  resetSelectedBooking() {
    this.selectedBooking = null;
  }
}
