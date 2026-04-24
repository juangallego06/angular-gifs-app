import { Component, input } from '@angular/core';
import { GiftListItemComponent } from './gift-list-item/gift-list-item.component';
import type { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gift-list',
  standalone: true,
  imports: [GiftListItemComponent],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.css',
})
export class GiftListComponent {
  giftsList = input.required<Gif[]>();
}
