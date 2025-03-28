import { NgModule } from '@angular/core';
import { CardViewerComponent } from '../card-viewer/card-viewer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardViewerComponent],
  imports: [CommonModule],
  exports: [CardViewerComponent],
})
export class CardViewerModule {}
