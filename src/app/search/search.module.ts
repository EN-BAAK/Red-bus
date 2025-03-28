import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeroModule } from '../shared/hero.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardViewerModule } from '../shared/card-viewer.module';
import { TravelsComponent } from './travels/travels.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SearchComponent,
    SearchFormComponent,
    TravelsComponent,
    ModalAddComponent,
  ],
  imports: [
    CommonModule,
    HeroModule,
    FormsModule,
    CardViewerModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
  ],
})
export class SearchModule {}
