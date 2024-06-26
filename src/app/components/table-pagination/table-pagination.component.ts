import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { ExchangeApiService } from '../../services/exchange-api.service';
import { FormsModule } from '@angular/forms';
import { Moedas } from '../../interfaces/imoedas';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { resultTypeListagemMoedas } from '../../types/result-type';
@Component({
  selector: 'table-pagination',
  styleUrl: 'table-pagination.component.css',
  templateUrl: 'table-pagination.component.html',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatSort,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgIf,
    MatSort,
  ],
})
export class TablePaginationExample implements OnInit, AfterViewInit {
  private listaSiglas: string[] = [];
  private listaMoedas: string[] = [];
  private objetosMontados: resultTypeListagemMoedas[] = [];
  busca: string = '';

  displayedColumns: string[] = ['sigla', 'moeda'];
  dataSource = new MatTableDataSource<resultTypeListagemMoedas>();

  constructor(private exchangeApiService: ExchangeApiService) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.exchangeApiService.getListaMoedasApi().subscribe((dados: Moedas) => {
      const moedas = dados.supported_codes;
      moedas.forEach((value) => {
        this.listaSiglas.push(value[0]);
        this.listaMoedas.push(value[1]);
      });

      // Monta objetos no formato de objeto usando as listas de siglas e moedas
      this.objetosMontados = this.listaSiglas.map((sigla, index) => {
        return { sigla: sigla, moeda: this.listaMoedas[index] };
      });

      // Define a fonte de dados da tabela após montar os objetos
      this.dataSource.data = this.objetosMontados;
    });
  }

  limparBusca() {
    this.busca = '';
    this.dataSource.filter = this.busca.trim();
  }

  buscarCoins(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.busca = filterValue;
    this.dataSource.filter = this.busca.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
