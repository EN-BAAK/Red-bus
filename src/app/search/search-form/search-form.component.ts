import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-form',
  standalone: false,
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  name: string = '';
  startDate: string = '';
  endDate: string = '';
  maxPrice: number | null = null;

  @Output() filterChange = new EventEmitter<any>();

  onInputChange() {
    this.filterChange.emit({
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      maxPrice: this.maxPrice,
    });
  }
}
