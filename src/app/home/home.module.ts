import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TravelsComponent } from './travels/travels.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { CardViewerModule } from '../shared/card-viewer.module';
import { HeroModule } from '../shared/hero.module';

@NgModule({
  declarations: [HomeComponent, TravelsComponent, ContactComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HeroModule,
    CardViewerModule,
  ],
})
export class HomeModule {}
