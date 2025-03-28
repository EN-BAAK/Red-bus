import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
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
