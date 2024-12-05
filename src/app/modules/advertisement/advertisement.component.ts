import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css'],
})
export class AdvertisementComponent {
  loading: boolean = false;
  filesBaseUrl: string = 'https://d3mkptw35kfza.cloudfront.net/';

  advertisements: any;
  advertisementsSelected: any = [];

  constructor(
    private apiService: ApiService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    // if (this.advertisementsSelected.length == 0) {
    //   this.advertisementsSelected = [
    //     {
    //       advertisementId: 'VVBGakVpKzNLYktXd3B6MjFNcVBudz09',
    //       advertisementCategoryId: 'UWRuejBBVlRwcm9xaEpoaFhoK2hEUT09',
    //       advertisementCategoryTitle:
    //         'Print Advertiesment in Convention Program Book given to all Attendees',
    //       advertisement: {
    //         id: 'VVBGakVpKzNLYktXd3B6MjFNcVBudz09',
    //         title: 'No Thanks',
    //         price: '0',
    //         sampleUrl: null,
    //       },
    //     },
    //     {
    //       advertisementId: 'Tlo5cHEvdnUvK0tjWklLcThaZkVVUT09',
    //       advertisementCategoryId: 'RmFBM1Z3UCtvNEJYNXZ2bXcxT00yUT09',
    //       advertisementCategoryTitle:
    //         'Video Ad played on Big Projection Screens in the Main Hall',
    //       advertisement: {
    //         id: 'Tlo5cHEvdnUvK0tjWklLcThaZkVVUT09',
    //         title: 'No Thanks',
    //         price: '0',
    //         sampleUrl: null,
    //       },
    //     },
    //     {
    //       advertisementId: 'dEhROFFVTkhJRUVOZXdkTnplaFgrQT09',
    //       advertisementCategoryId: 'VVBGakVpKzNLYktXd3B6MjFNcVBudz09',
    //       advertisementCategoryTitle: 'Banner Advertising at the Convention',
    //       advertisement: {
    //         id: 'dEhROFFVTkhJRUVOZXdkTnplaFgrQT09',
    //         title: 'No Thanks',
    //         price: '0',
    //         sampleUrl: null,
    //       },
    //     },
    //     {
    //       advertisementId: 'Vld2WTU1YXgzeUpIVURRaE42QzhDdz09',
    //       advertisementCategoryId: 'RUlhQU1aalRONkk2M3RWaEY2aDdMQT09',
    //       advertisementCategoryTitle: 'ISNA Website Advertiesment',
    //       advertisement: {
    //         id: 'Vld2WTU1YXgzeUpIVURRaE42QzhDdz09',
    //         title: 'No Thanks',
    //         price: '0',
    //         sampleUrl: null,
    //       },
    //     },
    //     {
    //       advertisementId: 'U1k2YTlCZjBhTnFwVFpnRFZNUERMUT09',
    //       advertisementCategoryId: 'a2QxNzZxWm9RbTNGbHRhVWpIbWN4dz09',
    //       advertisementCategoryTitle:
    //         'Naming Rights for Session Rooms at the ISNA Convention',
    //       advertisement: {
    //         id: 'U1k2YTlCZjBhTnFwVFpnRFZNUERMUT09',
    //         title: 'No Thanks',
    //         price: '0',
    //         sampleUrl: null,
    //       },
    //     },
    //     {
    //       advertisementId: 'clJiSytlS2JRWUxybDM3ZnA5SEk1QT09',
    //       advertisementCategoryId: 'Tlo5cHEvdnUvK0tjWklLcThaZkVVUT09',
    //       advertisementCategoryTitle: 'Sponsorship Packages (Year Round)',
    //       advertisement: {
    //         id: 'clJiSytlS2JRWUxybDM3ZnA5SEk1QT09',
    //         title: 'No Thanks',
    //         price: '0',
    //         sampleUrl: null,
    //       },
    //     },
    //   ];
    //   this.eventService.setAdvertisementDetails(this.advertisementsSelected);
    // }
    this.getAdvertisements();
  }

  getAdvertisements() {
    this.loading = true;

    this.advertisements = [];
    const data = {
      path: 'advertisements/list',
      payload: {},
    };
    this.apiService.postRequest(data).subscribe((data) => {
      this.advertisements = data.data;

      var selectedAdvertisements: any = localStorage.getItem(
        'selectedAdvertisement'
      );

      selectedAdvertisements = JSON.parse(selectedAdvertisements);

      if (selectedAdvertisements)
        selectedAdvertisements.forEach((data: any) => {
          this.advertisements.forEach((category: any) => {
            category.advertisements.forEach((advertisement: any) => {
              if (advertisement.id == data.advertisement.id) {
                advertisement.checked = true;

                this.selectedAdvertisements(
                  category.id,
                  category.title,
                  advertisement
                );
              }
            });
          });
        });

      this.loading = false;
    });
  }

  selectedAdvertisements(
    categoryId: string,
    categoryTitle: string,
    advertisement: any
  ) {
    const currentAdvertisementIndex = this.advertisementsSelected.findIndex(
      (item: any) => item.advertisementCategoryId === categoryId
    );

    if (currentAdvertisementIndex > -1) {
      this.advertisementsSelected[currentAdvertisementIndex].advertisement =
        advertisement;
    } else {
      this.advertisementsSelected.push({
        advertisementId: advertisement.id,
        advertisementCategoryId: categoryId,
        advertisementCategoryTitle: categoryTitle,
        advertisement,
      });
    }

    this.eventService.setAdvertisementDetails(this.advertisementsSelected);
  }
}
