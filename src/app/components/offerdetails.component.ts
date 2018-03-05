import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { AdsServices } from './../services/ads'
import { Router } from '@angular/router';

@Component({
    selector: 'offer-details',
    templateUrl: './offerdetails.component.html',
    styleUrls: ['./offerdetails.component.scss']
})

export class OfferDetailsComponent {

    @Input() selectedAd: any;
    @Output() onHide = new EventEmitter();

    constructor(
    ) { }

    HideDialog() {
        this.onHide.emit();
    }
}