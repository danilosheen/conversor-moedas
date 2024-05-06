import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ExchangeApiService } from '../../services/exchange-api.service';
import { Moedas } from '../../interfaces/imoedas';
import { resultTypeListagemMoedas } from '../../types/result-type';
@Component({
  selector: 'table-pagination',
  styleUrl: 'table-pagination.component.css',
  templateUrl: 'table-pagination.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePaginationExample implements OnInit, AfterViewInit {
  private listaSiglas: string[] = [];
  private listaMoedas: string[] = [];

  constructor(private exchangeApiService: ExchangeApiService) {}

  ngOnInit(): void {
    this.exchangeApiService.getListaMoedasApi().subscribe((dados: Moedas) => {
      const moedas = dados.supported_codes;
      moedas.forEach((value) => {
        this.listaSiglas.push(value[0]);
        this.listaMoedas.push(value[1]);
      });

      // Monta objetos no formato de objeto usando as listas de siglas e moedas
      const objetosMontados: resultTypeListagemMoedas[] = this.listaSiglas.map(
        (sigla, index) => {
          return { sigla: sigla, moeda: this.listaMoedas[index] };
        }
      );

      // Define a fonte de dados da tabela após montar os objetos
      this.dataSource.data = objetosMontados;
    });
  }

  displayedColumns: string[] = ['sigla', 'moeda'];
  dataSource = new MatTableDataSource<resultTypeListagemMoedas>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
