import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  countries: any = ['United States', 'Canada', 'Other'];

  statesUS: any = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  statesCanada: any = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Northwest Territories',
    'Nunavut',
    'Yukon',
  ];

  contact: any = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneOffice: '',
    phoneHome: '',
    businessType: '',
    companyName: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    fax: '',
  };

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.eventService.getContactDetails().subscribe((data: any) => {
      if (data) {
        this.contact = data;
      }
    });
  }

  updateContactData() {
    this.eventService.setContactDetails(this.contact);
  }

  setContactData() {
    this.eventService.setContactDetails(this.contact);
    this.router.navigate(['/payment']);
  }

  checkContactDetails() {
    let contactDetailsErr = false;
    var errMsg =
      'Please complete all the necessary fields in the contact form.';

    if (this.contact.companyName == '') {
      contactDetailsErr = true;
    } else if (this.contact.firstName == '') {
      contactDetailsErr = true;
    } else if (this.contact.lastName == '') {
      contactDetailsErr = true;
    } else if (this.contact.address == '') {
      contactDetailsErr = true;
    } else if (this.contact.city == '') {
      contactDetailsErr = true;
    } else if (this.contact.country == '') {
      contactDetailsErr = true;
    } else if (this.contact.state == '') {
      contactDetailsErr = true;
    } else if (this.contact.phoneOffice == '') {
      contactDetailsErr = true;
    } else if (
      this.contact.email == '' ||
      !this.contact.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      contactDetailsErr = true;
      errMsg = "The email you entered isn't in the right format.";
    } else if (this.contact.businessType == '') {
      contactDetailsErr = true;
    }

    if (contactDetailsErr) {
      this.toastr.error(errMsg);
    } else {
      this.setContactData();
    }
  }
}
