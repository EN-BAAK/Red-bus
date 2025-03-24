import { Component, Input } from '@angular/core';
import { Travel } from '../../utils/types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrl: './card-viewer.component.css',
  standalone: false,
  providers: [DatePipe],
})
export class CardViewerComponent {
  constructor(private datePipe: DatePipe) {}

  @Input() travel!: Travel;

  safeDescription() {
    let description = this.travel.desc;

    if (description.length > 250)
      description = this.travel.desc.slice(0, 250) + '...';

    return description;
  }

  formattedDate() {
    const formattedStartDate = this.datePipe.transform(
      this.travel.startDate,
      'MM/dd/y'
    );

    const formattedEndDate = this.datePipe.transform(
      this.travel.endDate,
      'MM/dd/y'
    );

    return `${formattedStartDate} - ${formattedEndDate}`;
  }
}
