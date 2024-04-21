import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RodapeComponent } from '../../components/rodape/rodape.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MenuComponent, RodapeComponent],
})
export class HomeComponent {}
