import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, NgbCollapseModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  title = 'Conversor de moedas';
  isCollapsed = true;
  isShowed = '';

  constructor() {}

  fecharNavbar() {
    if (window.innerWidth < 992) {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
