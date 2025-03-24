import { Component } from '@angular/core';
import { TravelsService } from '../travels.service';
import { Travel } from '../../utils/types';

@Component({
  selector: 'home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private travelService: TravelsService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(
      (data: any) => {
        this.travels = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  travels: Travel[] = [];
}
