import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})

export class SuccessComponent {
    constructor(public router: Router) { }

    back() {
        this.router.navigate(["HOME"]);
    }

}