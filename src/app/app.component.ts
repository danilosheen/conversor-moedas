import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeApiService } from './services/exchange-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HttpClientModule,
    HomeComponent,
    HistoricoComponent,
    PageNotFoundComponent,
    MenuComponent,
    RodapeComponent,
  ],
  providers: [ExchangeApiService],
})
export class AppComponent {
  title = 'conversor-moedas';
}
