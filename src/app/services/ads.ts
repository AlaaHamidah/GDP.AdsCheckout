import { Component, OnInit } from '@angular/core';

export interface Ad {
    ID: string,
    Name: string,
    Description: string,
    Price: number
}

export class AdsServices {

    adsList: Array<Ad> = [];

    getAdsList(successCallback?: ((value: Array<Ad>) => void)) {
        this.adsList = []
        //this part must be replaced with API retuned data
        this.adsList.push({ ID: 'classic', Name: 'Classic Ad', Description: 'Offers the most basic level of advertisement', Price: 269.99 })
        this.adsList.push({ ID: 'standout', Name: 'Standout Ad', Description: 'Allows advertisers to use a company logo and use a longer presentation text', Price: 322.99 })
        this.adsList.push({ ID: 'premium', Name: 'Premium Ad', Description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility', Price: 394.99 });

        successCallback(this.adsList);
    }

    checkout(ads: Array<Ad>, successCallback?: ((value: number) => void)) {

    }

}
