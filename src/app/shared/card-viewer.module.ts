import { NgModule } from '@angular/core';
import { CardViewerComponent } from '../card-viewer/card-viewer.component';

@NgModule({
  declarations: [CardViewerComponent],
  exports: [CardViewerComponent],
})
export class CardViewerModule {}
