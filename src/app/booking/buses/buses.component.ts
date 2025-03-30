import { Component, OnInit } from '@angular/core';
import { BusBookingSlotsService } from '../../services/bus-booking-slots.service';
import { TravelRoute } from '../../../utils/types';

@Component({
  selector: 'buses',
  standalone: false,
  templateUrl: './buses.component.html',
  styleUrl: './buses.component.css',
})
export class BusesComponent implements OnInit {
  constructor(private busBookingSlotsService: BusBookingSlotsService) {}

  ngOnInit(): void {
    this.getData();
  }

  travelRoute: TravelRoute[] = [];
  loading: boolean = true;

  getData() {
    this.busBookingSlotsService.getBusBookingSlots().subscribe(
      (data: TravelRoute[]) => {
        this.travelRoute = data;
        this.loading = false;
      },
      (error: Error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }
}
