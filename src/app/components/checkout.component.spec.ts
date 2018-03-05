import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CheckoutComponent } from "./checkout.component";
import { AdsServices } from "../services/ads";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";

describe('CheckoutComponent', () => {
    let fixture: ComponentFixture<CheckoutComponent>
    let component: CheckoutComponent;
    let service: AdsServices;
    let fakeAd: any = { Id: 1, Quantity: 1, Price: 100 }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, RouterTestingModule, FormsModule],
            declarations: [CheckoutComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [AdsServices]
        })

        fixture = TestBed.createComponent(CheckoutComponent)
        component = fixture.componentInstance;
        service = TestBed.get(AdsServices)
    })

    it('should create component', () => {
        expect(component).toBeTruthy();

    })

    it('should have 3 cart items', () => {
        component.Ads = [fakeAd, fakeAd, fakeAd]
        spyOn(service, 'getCheckout').and.returnValue(Observable.of([]))
        fixture.detectChanges();
        expect(component.cartItems.length).toBe(3)
    })

    it('should have result', () => {
        component.Ads = [fakeAd, fakeAd, fakeAd]
        spyOn(service, 'getCheckout').and.returnValue(Observable.of({
            totalPrice: 300,
            totalPriceAfterDiscount: 100
        }
        ))
        fixture.detectChanges();
        expect(component.checkoutResult).not.toBeUndefined()
        expect(component.isProcessing).toBeFalsy()
    })

    it('should show result', () => {
        component.Ads = [fakeAd, fakeAd, fakeAd]
        spyOn(service, 'getCheckout').and.returnValue(Observable.of({
            totalPrice: 300,
            totalPriceAfterDiscount: 100
        }))
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('#result'));
        let el = de.nativeElement;

        expect(el.innerText).toContain("Total : $300")
        expect(el.innerText).toContain("Total after Discount : $100")
        expect(el.innerText).toContain("You saved $200")
    })

    it('should redirect to success page', () => {
        let router = TestBed.get(Router)
        let spy = spyOn(router, 'navigate')

        let button = fixture.debugElement.query(By.css('#proceed'));
        button.triggerEventHandler('click', null)

        expect(spy).toHaveBeenCalledWith(['/success'])
    })
})