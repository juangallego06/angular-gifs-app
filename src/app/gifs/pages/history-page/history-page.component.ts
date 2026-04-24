import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [GiftListComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export default class HistoryPageComponent {
  gifsService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'])),
  );

  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));
}
