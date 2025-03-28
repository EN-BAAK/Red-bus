import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() content: string = '';
}
