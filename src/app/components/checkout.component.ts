import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { AdsServices } from './../services/ads'
import { Router } from '@angular/router';

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent {
    isProcessing: boolean = false;
    cartItems: Array<any>;
    checkoutResult: any = {};
    
    @Input() Ads: Array<any>;
    
    //this for hide dialog// 
    displayValue: boolean;
    @Output() displayChange = new EventEmitter();
    @Input()
    get display() {
        return this.displayValue;
    }
    set display(val) {
        this.displayValue = val;
        this.displayChange.emit(this.displayValue);
    }
    ////////

    constructor(
        public adsSvc: AdsServices,
        public router: Router
    ) { }

    ngOnInit() {
        this.isProcessing = true;
        this.cartItems = this.Ads.map(ad => {
            return {
                AdId: ad.Id,
                Quantity: ad.Quantity,
                Price: ad.Price
            }
        })
        this.adsSvc.getCheckout(this.cartItems).subscribe(result => {
            this.isProcessing = false;
            this.checkoutResult = result;
        });
    }
    
  proceed() {
    this.router.navigate(['/success']);
  }
}