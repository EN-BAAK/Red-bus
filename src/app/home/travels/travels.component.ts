import { Component } from '@angular/core';
import { Travel } from '../../../utils/types';
import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'travels',
  standalone: false,
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.css',
})
export class TravelsComponent {
  constructor(private travelService: TravelsService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(
      (data: any) => {
        this.travels = data.slice(0, 8);
        this.loading = false;
      },
      (error: any) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }

  loading: boolean = true;
  travels: Travel[] = [];
}
