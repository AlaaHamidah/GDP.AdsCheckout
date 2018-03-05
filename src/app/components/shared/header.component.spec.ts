import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from "./header.component";
import { By } from "@angular/platform-browser";

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<HeaderComponent>
    let component: HeaderComponent;

    let storage = { 'currentUser': 'alaa' }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeaderComponent
            ],
        })
        fixture = TestBed.createComponent(HeaderComponent)
        component = fixture.componentInstance;
    })

    it('should create component', () => {
        expect(component).toBeTruthy();

    })

    it('should show login when no user is logging in', () => {
        spyOn(localStorage, 'getItem').and.callFake((key) => {
            return null;
        });
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.navbar-nav'));

        expect(de.nativeElement.innerText).toContain('Log In')
    })

    it('should show logut when user is logging in', () => {
        spyOn(localStorage, 'getItem').and.callFake((key) => {
            return storage[key];
        });
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.navbar-nav'));

        expect(de.nativeElement.innerText).toContain('Log Out')
    })

    it('should show username when user is logging in', () => {
        spyOn(localStorage, 'getItem').and.callFake((key) => {
            return storage[key];
        });
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.navbar-nav'));

        expect(de.nativeElement.innerText).toContain(storage['currentUser'])
    })


    it('should remove user from local storage when user log out', () => {
        spyOn(localStorage, 'getItem').and.callFake((key) => {
            return storage[key];
        });
        fixture.detectChanges();
        let spy = spyOn(localStorage, 'removeItem')

        let logout = fixture.debugElement.query(By.css('#logout')).nativeElement;
        logout.click();

        expect(spy).toHaveBeenCalled();
    })
})