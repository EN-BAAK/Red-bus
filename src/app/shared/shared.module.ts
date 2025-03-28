import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewerComponent } from '../card-viewer/card-viewer.component';

@NgModule({
  declarations: [CardViewerComponent],
  imports: [CommonModule],
  exports: [CardViewerComponent],
})
export class SharedModule {}
