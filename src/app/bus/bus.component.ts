import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus',
  standalone: false,
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css',
})
export class BusComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.busId = params.get('id');
    });
  }

  busId: string | null = null;
}
