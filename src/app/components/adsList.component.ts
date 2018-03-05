import { Component, OnInit, ViewChild } from '@angular/core';
import { AdsServices } from './../services/ads'
import { Router } from '@angular/router';

@Component({
  selector: 'ads-list',
  templateUrl: './adsList.component.html',
  styleUrls: ['./adsList.component.scss']
})

export class AdsListComponent {
  isValid: boolean = true;
  displayOfferDetails: boolean = false;
  displayCheckout: boolean = false;
  isLoading: boolean = true;

  selectedAd: any;
  Ads: Array<any>;

  constructor(
    public adsSvc: AdsServices,
    public router: Router
  ) { }


  ngOnInit() {
    this.adsSvc.getAdsList().subscribe(result => {
      this.isLoading = false
      this.Ads = result.map(ad => {
        return {
          Id: ad.id,
          Name: ad.name,
          Description: ad.description,
          Quantity: 0,
          Price: ad.price,
          Offer: ad.offer
        }
      })
    }, err => {
      if (err.status == 401)
        //Not Authorized
        this.router.navigate(['/login'])
    })
  }

  showOfferDetails(row) {
    this.selectedAd = row;
    this.displayOfferDetails = true;
  }

  hideOfferDetails() {
    this.displayOfferDetails = false;
    this.selectedAd = null
  }

  validateNumber(e) {
    if (!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || e.keyCode == 8)) {
      return false;
    }
  }

  validateCheckout() {
    let check = this.Ads.filter(ad => ad.Quantity > 0)
    return (this.isValid = check.length > 0)
  }

  showCheckout() {
    if (this.validateCheckout()) {
      this.displayCheckout = true;
    }
  }
}
