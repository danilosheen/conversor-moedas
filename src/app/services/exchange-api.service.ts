import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moedas } from '../interfaces/imoedas';
import { IConversor } from '../interfaces/iresponse-api-convert';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeApiService {
  private _apiKey: string = environment.API_KEY;
  private _urlBase: string = environment.URL_BASE;

  constructor(private http: HttpClient) {}

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
