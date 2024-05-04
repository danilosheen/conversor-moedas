import { Component } from '@angular/core';
import { TablePaginationExample } from '../../components/table-pagination/table-pagination.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listagem-moedas',
  standalone: true,
  templateUrl: './listagem-moedas.component.html',
  styleUrl: './listagem-moedas.component.css',
  imports: [TablePaginationExample],
})
export class ListagemMoedasComponent {}
