import { TestBed, ComponentFixture } from "@angular/core/testing";
import { AdsServices } from "../services/ads";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AdsListComponent } from "./adsList.component";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from "./checkout.component";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import { debug } from "util";

describe('AdsListComponent', () => {

    let fixture: ComponentFixture<AdsListComponent>;
    let component: AdsListComponent;
    let service: AdsServices;

    let fakeAd = {
        id: 1,
        name: 'name',
        description: 'desc',
        price: 100,
        offer: {}
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, RouterTestingModule, FormsModule],
            declarations: [AdsListComponent, CheckoutComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [AdsServices]
        })

        fixture = TestBed.createComponent(AdsListComponent)
        component = fixture.componentInstance;
        service = TestBed.get(AdsServices)
    })

    it('should create component', () => {
        expect(component).toBeTruthy();
    })

    it('should load ads', () => {
        service = TestBed.get(AdsServices)
        let ads: Array<any> = [
            fakeAd, fakeAd
        ]
        spyOn(service, 'getAdsList').and.returnValue(Observable.of(ads))
        fixture.detectChanges()
        expect(component.Ads.length).toBe(2)
    })

    it('should show total price', () => {
        let ads: Array<any> = [fakeAd]
        spyOn(service, 'getAdsList').and.returnValue(Observable.of(ads))
        fixture.detectChanges()

        component.Ads[0].Quantity = 2;
        fixture.detectChanges()
        let de = fixture.debugElement.queryAll(By.css('.totalprice'))

        let el: HTMLElement = de[0].nativeElement
        expect(el.innerText).toContain('200')
        expect(el.innerText).toContain('$')
    })


    it('should change quantity when quantity input changed', () => {
        spyOn(service, 'getAdsList').and.returnValue(Observable.of([fakeAd]))
        fixture.detectChanges()

        let input = fixture.debugElement.query(By.css('#quantity')).nativeElement
        input.value = 1;
        input.dispatchEvent(new Event('input'));

        expect(component.Ads[0].Quantity).toBe(1)
    })

    it('should disable checkout button when all quantity equal 0 ', () => {
        let ads: Array<any> = [
            fakeAd, fakeAd];
        spyOn(service, 'getAdsList').and.returnValue(Observable.of(ads));
        fixture.detectChanges()

        component.Ads[0].Quantity = 0;
        component.Ads[1].Quantity = 0;
        fixture.detectChanges();

        let button = fixture.debugElement.query(By.css('#checkout'));

        expect(button.nativeElement.disabled).toBeTruthy();
    })

    it('should enable checkout button when any quantity greater than 0 ', () => {
        let ads: Array<any> = [
            fakeAd, fakeAd];
        spyOn(service, 'getAdsList').and.returnValue(Observable.of(ads));
        fixture.detectChanges()

        component.Ads[0].Quantity = 0;
        component.Ads[0].Quantity = 1;
        fixture.detectChanges();

        let button = fixture.debugElement.query(By.css('#checkout'));

        expect(button.nativeElement.disabled).toBeFalsy();
    })


    it('should hide offer button when ad has no offer', () => {
        spyOn(service, 'getAdsList').and.returnValue(Observable.of([{}]))
        fixture.detectChanges()

        let button = fixture.debugElement.query(By.css('#offer'));

        expect(button).toBeNull();
    })

    it('should call showCheckout when click on checkout', () => {
        spyOn(service, 'getAdsList').and.callFake(() => {
            return Observable.of([fakeAd])
        })
        fixture.detectChanges()

        let spy = spyOn(component, "showCheckout")

        let button = fixture.debugElement.query(By.css('#checkout'));
        button.triggerEventHandler('click', null)

        expect(spy).toHaveBeenCalled();
    })


    it('should call showOfferDetails when click on offer', () => {
        spyOn(service, 'getAdsList').and.callFake(() => {
            return Observable.of([fakeAd])
        })
        fixture.detectChanges()

        let spy = spyOn(component, "showOfferDetails")

        let button = fixture.debugElement.query(By.css('#offer'));
        button.triggerEventHandler('click', null)

        expect(spy).toHaveBeenCalled();
    })

})