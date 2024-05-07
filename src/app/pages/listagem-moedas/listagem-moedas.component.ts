import { Component } from '@angular/core';
import { TablePaginationExample } from '../../components/table-pagination/table-pagination.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-listagem-moedas',
  standalone: true,
  templateUrl: './listagem-moedas.component.html',
  styleUrl: './listagem-moedas.component.css',
  imports: [TablePaginationExample, MatSelectModule],
})
export class ListagemMoedasComponent {}
