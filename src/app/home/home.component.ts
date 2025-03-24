import { Component } from '@angular/core';
import { TravelsService } from '../travels.service';
import { Travel } from '../../utils/types';

@Component({
  selector: 'home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private travelService: TravelsService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(
      (data: any) => {
        this.travels = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  travels: Travel[] = [];

  fullName: string = '';
  email: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted', {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
    });
  }
}
