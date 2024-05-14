import { Component, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ExchangeApiService } from '../../services/exchange-api.service';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

import { historyTable } from '../../types/history-table';
import { MatDialog } from '@angular/material/dialog';
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
    MatButtonModule,
  ],
})
export class HistoricoComponent {
  historyDelete: boolean = false;
  conversionDelete: boolean = false;

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

  constructor(
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) {}
  conversoes = JSON.parse(localStorage.getItem('conversoes') || '[]');

  ngOnInit(): void {
    this.dataSource.data = this.conversoes;
  }

  exibirDialogoExclusaoConversao(index: number) {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: 'Você tem certeza de que deseja remover esta conversão?',
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.removerConversao(index);
      }
    });
  }

  exibirDialogoExclusaoHistorico() {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: 'Você tem certeza de que deseja remover todo o histórico?',
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.removerHistorico();
      }
    });
  }

  removerConversao(index: number) {
    this.localStorageService.removerConversao(index);
  }

  removerHistorico() {
    this.localStorageService.removerHistorico();
  }

  isValorMaiorQueMil(valor: any): boolean {
    return valor.valor > 1000;
  }

  // isValorMaiorQueMilTable() {
  //   return v;
  // }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
