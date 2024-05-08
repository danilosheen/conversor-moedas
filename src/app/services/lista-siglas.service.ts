import { Injectable, OnInit } from '@angular/core';
import { ExchangeApiService } from './exchange-api.service';
import { Moedas } from '../interfaces/imoedas';

@Injectable({
  providedIn: 'root',
})
export class ListaSiglasService implements OnInit {
  private listaSiglas: string[] = [];
  private listaMoedas: string[] = [];

  constructor(private exchangeApiService: ExchangeApiService) {
    console.log('executei 2');
    this.exchangeApiService.getListaMoedasApi().subscribe((dados: Moedas) => {
      const moedas = dados.supported_codes;
      moedas.forEach((value: string[]) => {
        this.listaSiglas.push(value[0]);
        this.listaMoedas.push(value[1]);
      });
    });
  }

  ngOnInit(): void {}

  getListaSiglas() {
    return this.listaSiglas;
  }

  getListaMoedas() {
    return this.listaMoedas;
  }
}
