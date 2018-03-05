import { TestBed, ComponentFixture } from "@angular/core/testing";
import { OfferDetailsComponent } from "./offerdetails.component";
import { By } from "@angular/platform-browser";

describe('OfferDetailsComponent', () => {
    let fixture: ComponentFixture<OfferDetailsComponent>
    let component: OfferDetailsComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [OfferDetailsComponent
            ]
        })

        fixture = TestBed.createComponent(OfferDetailsComponent)
        component = fixture.componentInstance;
    })

    it('should create component', () => {
        expect(component).toBeTruthy();
    })


    it('should contain "Buy 2 Get 1" if type is BuyNFreeM', () => {
        component.selectedAd = {
            Offer: {
                offerType: 'BuyNFreeM',
                minimumPurchase: 2,
                freeItem: 1
            }
        }
        fixture.detectChanges()
        let de = fixture.debugElement.query(By.css('#offer-title'));
        let el = de.nativeElement;
        fixture.detectChanges()
        expect(el.innerText).toContain('Buy 2 Get 1')
    })


    it('should contain "10.00 Discount" if type is DiscountForN', () => {
        component.selectedAd = {
            Offer: {
                offerType: 'DiscountForN'
                , newPrice: 10
            },
            Price: 20
        }
        fixture.detectChanges()
        let de = fixture.debugElement.query(By.css('#offer-title'));
        let el = de.nativeElement;
        fixture.detectChanges()
        expect(el.innerText).toContain('10.00 Discount')
    })


    it('should call onHide when click on "Got it"', () => {
        let spy = spyOn(component.onHide, "emit")

        let button = fixture.debugElement.query(By.css('#hideDialog'));
        button.triggerEventHandler('click', null)

        expect(spy).toHaveBeenCalled();
    })
    
})