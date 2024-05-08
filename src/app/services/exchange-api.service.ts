import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moedas } from '../interfaces/imoedas';
import { IConversor } from '../interfaces/iresponse-api-convert';

@Injectable({
  providedIn: 'root',
})
export class ExchangeApiService {
  private _apiKey: string = 'c83269fdccca8c27a06fa98d';
  private _urlBase: string = 'https://v6.exchangerate-api.com/v6';

  constructor(private http: HttpClient) {
    console.log('executei 1');
  }

  getListaMoedasApi() {
    const result = this.http.get<Moedas>(
      `${this._urlBase}/${this._apiKey}/codes`
    );
    return result;
  }

  conversorMoedas(moedaOrigem: string, moedaDestino: string, valor: number) {
    const respostaApiConvert = this.http.get<IConversor>(
      `${this._urlBase}/${this._apiKey}/pair/${moedaOrigem}/${moedaDestino}/${valor}`
    );
    return respostaApiConvert;
  }
}
