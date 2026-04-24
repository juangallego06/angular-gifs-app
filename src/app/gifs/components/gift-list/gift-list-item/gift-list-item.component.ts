import { Component, input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  standalone: true,
  imports: [],
  templateUrl: './gift-list-item.component.html',
  styleUrl: './gift-list-item.component.css',
})
export class GiftListItemComponent {
  urlImage = input.required<string>();
}
