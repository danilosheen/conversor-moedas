import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HomeComponent,
    HistoricoComponent,
    PageNotFoundComponent,
    MenuComponent,
    RodapeComponent,
  ],
})
export class AppComponent {
  title = 'conversor-moedas';
}
