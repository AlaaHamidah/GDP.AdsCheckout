import { Component, OnInit } from '@angular/core';
import { AdsServices, Ad } from './../services/ads'

@Component({
  selector: 'ads-list',
  templateUrl: './adsList.component.html',
  styleUrls: ['./adsList.component.scss']
})

export class AdsListComponent {

  constructor(
    public adsSvc: AdsServices
  ) { }

  title = 'app';
  Ads: Array<any>

  ngOnInit() {

    this.adsSvc.getAdsList(result => {
      this.Ads = result.map(ad => {
        return {
          ID: ad.ID,
          Name: ad.Name,
          Description: ad.Description,
          Amount: 0,
          Price: ad.Price
        }
      })
    })
  }

  checkout() {
    this.adsSvc.checkout(this.Ads, data => {

    })
  }
}
