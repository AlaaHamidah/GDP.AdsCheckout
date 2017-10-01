import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  currentUser: string = ""
  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser')
  }
  logout() {
    localStorage.removeItem('currentUser')
  }
}