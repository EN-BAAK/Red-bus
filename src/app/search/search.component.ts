import { Component } from '@angular/core';
import { TravelsService } from '../travels.service';
import { Travel, TravelFilters } from '../../utils/types';

@Component({
  selector: 'search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private travelService: TravelsService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(
      (data: Travel[]) => {
        this.travels = data;
        this.loading = false;
      },
      (error: Error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }

  private travels: Travel[] = [];

  loading: boolean = true;
  isModalVisible: boolean = false;

  filters: TravelFilters = {
    name: '',
    endDate: '',
    startDate: '',
    maxPrice: null,
  };

  get filteredTravels(): Travel[] {
    return this.travels.filter(
      ({ name, startDate, endDate, price }) =>
        (!this.filters.name || name.includes(this.filters.name)) &&
        (!this.filters.startDate ||
          new Date(startDate) >= new Date(this.filters.startDate)) &&
        (!this.filters.endDate ||
          new Date(endDate) <= new Date(this.filters.endDate)) &&
        (this.filters.maxPrice === null || price <= this.filters.maxPrice)
    );
  }

  updateFilters(newFilters: any) {
    this.filters = newFilters;
  }
  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
    console.log(this.isModalVisible);
  }
}
