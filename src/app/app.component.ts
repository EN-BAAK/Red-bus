import { Component } from '@angular/core';
import { AppRoutes } from '../utils/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isNavbarCollapsed: boolean = true;
  routes: AppRoutes[] = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Search',
      path: 'search',
    },
    {
      name: 'Booking',
      path: 'booking',
    },
  ];
}
