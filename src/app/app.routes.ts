import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversaoMoedasComponent } from './pages/conversao-moedas/conversao-moedas.component';
import { ListagemMoedasComponent } from './pages/listagem-moedas/listagem-moedas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moedas', component: ListagemMoedasComponent },
  { path: 'conversor', component: ConversaoMoedasComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '**', component: PageNotFoundComponent },
];
