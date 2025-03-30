import { Component, Input } from '@angular/core';
import { TravelRoute } from '../../../utils/types';
import { Router } from '@angular/router';

@Component({
  selector: 'bus-card',
  standalone: false,
  templateUrl: './bus-card.component.html',
  styleUrl: './bus-card.component.css',
})
export class BusCardComponent {
  constructor(private router: Router) {}

  @Input() travelRoute!: TravelRoute;

  goToBus(busId: number) {
    this.router.navigate(['/bus', busId]);
  }
}
