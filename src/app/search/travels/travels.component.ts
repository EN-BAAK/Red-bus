import { Component, Input } from '@angular/core';
import { Travel } from '../../../utils/types';

@Component({
  selector: 'travels',
  standalone: false,
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.css',
})
export class TravelsComponent {
  @Input() travels: Travel[] = [];
  @Input() loading: boolean = true;
}
