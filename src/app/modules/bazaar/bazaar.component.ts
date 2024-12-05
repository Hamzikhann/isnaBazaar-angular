import { Component } from '@angular/core';

@Component({
  selector: 'app-bazaar',
  templateUrl: './bazaar.component.html',
  styleUrls: ['./bazaar.component.css'],
})
export class BazaarComponent {
  boothCategories: any = [];
  bazaarPdfSrc: string = '/assets/documents/bazaar.pdf';
  zoom: number = 1;

  constructor() {}

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    if (this.zoom > 0) this.zoom--;
  }
}
