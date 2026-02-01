import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false
})
export class SidebarComponent {
  isOpen = true;

  menuItems = [
    { text: 'Dashboard', icon: 'home', path: '/dashboard' },
    { text: 'Intake', icon: 'plus', path: '/intakes' },
    { text: 'Stock', icon: 'cardcontent', path: '/stock' },
    { text: 'Dispatches', icon: 'export', path: '/dispatch' }
  ];
  constructor(private router: Router) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  navigate(item: any) {
    this.router.navigate([item.path]);
  }
}