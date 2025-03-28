import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from '../shared/hero.module';
import { BookingComponent } from './booking.component';
import { BusCardComponent } from './bus-card/bus-card.component';

@NgModule({
  declarations: [BookingComponent, BusCardComponent],
  imports: [CommonModule, HeroModule],
})
export class BookingModule {}

