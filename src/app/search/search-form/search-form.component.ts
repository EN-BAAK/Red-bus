import { Component, EventEmitter, Output } from '@angular/core';
import { TravelFilters } from '../../../utils/types';

@Component({
  selector: 'search-form',
  standalone: false,
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  filters: TravelFilters = {
    name: '',
    startDate: '',
    endDate: '',
    maxPrice: null,
  };

  @Output() filterChange = new EventEmitter<any>();
  @Output() toggleModal = new EventEmitter<any>();

  onInputChange() {
    this.filterChange.emit({
      name: this.filters.name,
      startDate: this.filters.startDate,
      endDate: this.filters.endDate,
      maxPrice: this.filters.maxPrice,
    });
  }

  onAddTravel() {
    this.toggleModal.emit();
  }
}
