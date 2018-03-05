import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { SuccessComponent } from "./success.component";
import { Router } from "@angular/router";
import { By } from "@angular/platform-browser";

describe('SuccessComponent', () => {
    let fixture: ComponentFixture<SuccessComponent>
    let component: SuccessComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [SuccessComponent
            ],
        })
        fixture = TestBed.createComponent(SuccessComponent)
        component = fixture.componentInstance;
    })

    it('should create component', () => {
        expect(component).toBeTruthy();

    })

    it('should redirect to home page', () => {
        let router = TestBed.get(Router)
        let spy = spyOn(router, 'navigate')

        let button = fixture.debugElement.query(By.css('#back'));
        button.triggerEventHandler('click', null)

        expect(spy).toHaveBeenCalledWith(['HOME'])
    })
})