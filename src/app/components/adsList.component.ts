import { Component, OnInit, ViewChild } from '@angular/core';
import { AdsServices } from './../services/ads'
import { Router } from '@angular/router';

@Component({
  selector: 'ads-list',
  templateUrl: './adsList.component.html',
  styleUrls: ['./adsList.component.scss']
})

export class AdsListComponent {
  isProcessing: boolean = false;
  isValid: boolean = true;
  display: boolean = false;
  displayCheckout: boolean = false;
  isLoading: boolean = true;

  selectedAd: any;
  Ads: Array<any>;
  cartItems: Array<any>;
  checkoutResult: any = {} ;
  Arr = Array; 

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
          Offer: ad.offer,
          ProductRate: ad.productRate
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
    this.display = true;
  }

  hideOfferDetails() {
    this.display = false;
    this.selectedAd = null
  }

  validateCheckout() {
    let check = this.Ads.filter(ad => ad.Quantity > 0)
    return (this.isValid = check.length > 0)
  }

  checkout() {
    if (this.validateCheckout()) {
      this.displayCheckout = true;
      this.isProcessing = true;
      this.cartItems = this.Ads.map(ad => {
        return {
          ProductId: ad.Id,
          Quantity: ad.Quantity,
          Price: ad.Price
        }
      })
      this.adsSvc.getCheckout(this.cartItems).subscribe(result => {
        this.isProcessing = false;
        this.checkoutResult = result;
      });
    }
  }

  proceed() {
    this.router.navigate(['/success']);
  }
}
