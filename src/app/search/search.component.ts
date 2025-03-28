import { Component, ViewChild } from '@angular/core';
import { TravelsService } from '../services/travels.service';
import { AddTravelForm, Travel, TravelFilters } from '../../utils/types';
import { ModalAddComponent } from './modal-add/modal-add.component';

@Component({
  selector: 'search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private travelService: TravelsService) {}

  ngOnInit(): void {
    this.getData();
  }

  @ViewChild(ModalAddComponent) modalChild!: ModalAddComponent;

  private travels: Travel[] = [];

  loading: boolean = true;

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
        (this.filters.maxPrice === null ||
          price === null ||
          price <= this.filters.maxPrice)
    );
  }

  getData() {
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

  addTravel(travel: AddTravelForm) {
    this.travelService.addTravel(travel);
    this.getData();
  }

  updateFilters(newFilters: any) {
    this.filters = newFilters;
  }

  openChildModal() {
    this.modalChild.openModal();
  }
}
