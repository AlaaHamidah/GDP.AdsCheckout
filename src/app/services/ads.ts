import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdsServices {
    constructor(private http: Http) { }

    private basePath = "http://localhost:5000"

    getAdsList(): Observable<Array<any>> {
        let currentUser = localStorage.getItem('currentUser').toString()
        let currentPath = this.basePath + "/products/customer";
        let headerParams = new Headers({});
        headerParams.set('customerId', currentUser)

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams
        };

        return this.http.get(currentPath, requestOptions).map((res: Response) => res.json())
            .catch(error => Observable.throw(error.message || error));
    }


    getCheckout(cartItems: Array<any>): Observable<any> {
        let currentUser = localStorage.getItem('currentUser').toString();
        let currentPath = this.basePath + "/checkout";
        let headerParams = new Headers({});
        headerParams.set('customerId', currentUser)

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams
        };
        requestOptions.body = cartItems;

        return this.http.request(currentPath, requestOptions).map((res: Response) => res.json())
            .catch(error => Observable.throw(error.message || error));
    }
}
