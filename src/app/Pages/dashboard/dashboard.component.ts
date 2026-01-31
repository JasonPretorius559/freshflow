import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string = '';

  // Stats for DxCard
  stats = [
    { title: 'Total Pallets', value: 1250, color: '#fc8894' },
    { title: 'Trucks In Transit', value: 48, color: '#f87171' },
    { title: 'Pending Orders', value: 32, color: '#fb7185' },
    { title: 'Users', value: 12, color: '#fda4af' },
  ];

  // Sample data for DxChart
  palletData = [
    { day: 'Mon', pallets: 100 },
    { day: 'Tue', pallets: 120 },
    { day: 'Wed', pallets: 90 },
    { day: 'Thu', pallets: 150 },
    { day: 'Fri', pallets: 80 },
  ];

  truckData = [
    { status: 'In Transit', count: 48 },
    { status: 'Delivered', count: 120 },
    { status: 'Delayed', count: 5 },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.isLoggedIn() 
      ? JSON.parse(localStorage.getItem('user') || '{}') 
      : null;
    this.userName = user?.name || 'Warehouse Admin';
  }
}
