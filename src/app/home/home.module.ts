import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { TravelsComponent } from './travels/travels.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    TravelsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, SharedModule],
})
export class HomeModule {}
