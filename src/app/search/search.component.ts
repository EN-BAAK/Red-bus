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

  filters: TravelFilters = {
    name: '',
    endDate: '',
    startDate: '',
    maxPrice: null,
  };

  get filteredTravels(): Travel[] {
    return this.travels.filter((travel) => {
      const matchesName = this.filters.name
        ? this.filters.name && travel.name.includes(this.filters.name)
        : true;

      const matchesStartDate = this.filters.startDate
        ? this.filters.startDate &&
          new Date(travel.startDate) >= new Date(this.filters.startDate)
        : true;

      const matchesEndDate = this.filters.endDate
        ? this.filters.endDate &&
          new Date(travel.endDate) <= new Date(this.filters.endDate)
        : true;

      const matchesMaxPrice = this.filters.maxPrice
        ? this.filters.maxPrice && travel.price <= this.filters.maxPrice
        : true;

      return (
        matchesName && matchesStartDate && matchesEndDate && matchesMaxPrice
      );
    });
  }

  updateFilters(newFilters: any) {
    this.filters = newFilters;
  }
}
