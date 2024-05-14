import { Component, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ExchangeApiService } from '../../services/exchange-api.service';

import { FormsModule } from '@angular/forms';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

import { historyTable } from '../../types/history-table';
@Component({
  selector: 'app-historico',
  standalone: true,
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css',
  imports: [
    NgFor,
    NgIf,
    NgClass,
    FormsModule,
    ModalDialogComponent,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatSort,
    MatSelectModule,
  ],
})
export class HistoricoComponent {
  private objetosMontados: historyTable[] = [];
  displayedColumns: string[] = [
    'data',
    'hora',
    'valor',
    'moedaOrigem',
    'moedaDestino',
    'resultado',
    'taxa',
    'acoes',
  ];
  dataSource = new MatTableDataSource<historyTable>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private localStorageService: LocalStorageService) {}
  conversoes = JSON.parse(localStorage.getItem('conversoes') || '[]');

  ngOnInit(): void {
    console.log(this.conversoes);
    this.dataSource.data = this.conversoes;
  }

  removerConversao(index: number) {
    this.localStorageService.removerConversao(index);
  }

  isValorConvertidoMaiorQueMil(conversao: any): boolean {
    return conversao.valor > 1000;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
