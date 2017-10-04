import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  localStorage: any

  constructor() {
    this.localStorage = localStorage
  }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('currentUser')
  }
}