import { Component, Input } from '@angular/core';
import { TravelRoute } from '../../../utils/types';

@Component({
  selector: 'bus-card',
  standalone: false,
  templateUrl: './bus-card.component.html',
  styleUrl: './bus-card.component.css'
})
export class BusCardComponent {
  @Input() travelRoute!: TravelRoute
}
