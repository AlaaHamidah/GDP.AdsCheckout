import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from "./login.component";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>
    let component: LoginComponent;

    let storage = { 'currentUser': 'alaa' }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [LoginComponent
            ],
        })
        fixture = TestBed.createComponent(LoginComponent)
        component = fixture.componentInstance;
    })

    it('should create component', () => {
        expect(component).toBeTruthy();
    })

    it('should set user in local storage when user log in', () => {
        let spy = spyOn(localStorage, 'setItem')

        let login = fixture.debugElement.query(By.css('#login')).nativeElement;
        login.click();

        expect(spy).toHaveBeenCalled();
    })

    it('should navigate to main page after user log in', () => {
        let router= TestBed.get(Router)
        let spy = spyOn(router, 'navigate')

        let login = fixture.debugElement.query(By.css('#login')).nativeElement;
        login.click();

        expect(spy).toHaveBeenCalledWith(["HOME"]);
    })

})