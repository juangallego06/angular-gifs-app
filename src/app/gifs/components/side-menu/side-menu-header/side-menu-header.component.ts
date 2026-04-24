import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-header.component.html',
  styleUrl: './side-menu-header.component.css',
})
export class SideMenuHeaderComponent {
  envs = environment;
}
