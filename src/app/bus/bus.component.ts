import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusBookingSlotsService } from '../services/bus-booking-slots.service';
import { TravelRoute } from '../../utils/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
  imports: [CommonModule],
})
export class BusComponent implements OnInit {
  busSlot: TravelRoute = {
    capacity: 0,
    id: -1,
    name: '',
    reserved: [],
    travelId: -1,
  };

  loading: boolean = true;
  seatRows: { left: number[]; right: number[] }[] = [];

  private busId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private busBookingSlotsService: BusBookingSlotsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.busId = params.get('id');
      if (this.busId) {
        this.getBusDetails(Number(this.busId));
      }
    });
  }

  getBusDetails(id: number) {
    this.busBookingSlotsService.getBusBookingSlotById(id).subscribe(
      (data: TravelRoute | undefined) => {
        if (data) {
          this.busSlot = data;
          this.createSeatLayout(this.busSlot.capacity);
        }
        this.loading = false;
      },
      (error: Error) => {
        console.error('Error fetching bus details:', error);
        this.loading = false;
      }
    );
  }

  createSeatLayout(capacity: number) {
    this.seatRows = [];
    const totalRows = Math.ceil(capacity / 4);
    let seatNumber = 1;

    for (let i = 0; i < totalRows; i++) {
      let left = [];
      let right = [];

      if (seatNumber <= capacity) left.push(seatNumber++);
      if (seatNumber <= capacity) left.push(seatNumber++);
      if (seatNumber <= capacity) right.push(seatNumber++);
      if (seatNumber <= capacity) right.push(seatNumber++);

      this.seatRows.push({ left, right });
    }
  }

  isReserved(position: number): boolean {
    return this.busSlot.reserved.includes(position);
  }

  toggleSeat(position: number) {
    if (!this.loading && this.busSlot) {
      this.busBookingSlotsService.updateBusBookingSlot(
        this.busSlot.id,
        position
      );

      this.getBusDetails(Number(this.busId));
    }
  }
}
