import { Component, OnInit } from '@angular/core';
import { ExchangeApiService } from '../../services/exchange-api.service';
import { IConversor } from '../../interfaces/iresponse-api-convert';
import { Moedas } from '../../interfaces/imoedas';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ListaSiglasService } from '../../services/lista-siglas.service';

@Component({
  selector: 'app-conversao-moedas',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './conversao-moedas.component.html',
  styleUrl: './conversao-moedas.component.css',
})
export class ConversaoMoedasComponent implements OnInit {
  valorConvertido: number = 0;
  moedaOrigem: string = '';
  moedaDestino: string = '';
  valor: string = '';
  siglas: string[] = [];
  moedas: string[] = [];
  response!: IConversor;

  constructor(
    private conversorApi: ExchangeApiService,
    private listaSiglasService: ListaSiglasService
  ) {}

  ngOnInit(): void {
    this.siglas = this.listaSiglasService.getListaSiglas();
    this.moedas = this.listaSiglasService.getListaMoedas();
  }

  converterValor() {
    this.conversorApi
      .conversorMoedas(
        this.moedaOrigem,
        this.moedaDestino,
        parseFloat(this.valor)
      )
      .subscribe((dados: IConversor) => {
        this.valorConvertido = parseFloat(dados.conversion_result.toFixed(2));
        this.response = dados;
        return this.valorConvertido;
      });
  }

  getResponseCompleta() {
    return this.response;
  }
}
