import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from '../shared/hero.module';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, HeroModule],
})
export class BookingModule {}

