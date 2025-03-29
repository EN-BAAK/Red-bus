import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from '../shared/hero.module';
import { BookingComponent } from './booking.component';
import { BusCardComponent } from './bus-card/bus-card.component';
import { BusesComponent } from './buses/buses.component';

@NgModule({
  declarations: [BookingComponent, BusCardComponent, BusesComponent],
  imports: [CommonModule, HeroModule],
})
export class BookingModule {}

