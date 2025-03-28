import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeroModule } from '../shared/hero.module';
import { FormsModule } from '@angular/forms';
import { CardViewerModule } from "../shared/card-viewer.module";
import { TravelsComponent } from './travels/travels.component';

@NgModule({
  declarations: [SearchComponent, SearchFormComponent, TravelsComponent],
  imports: [CommonModule, HeroModule, FormsModule, CardViewerModule],
})
export class SearchModule {}
