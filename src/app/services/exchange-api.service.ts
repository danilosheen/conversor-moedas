import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moedas } from '../interfaces/imoedas';

@Injectable({
  providedIn: 'root',
})
export class ExchangeApiService {
  private _apiKey: string = 'c83269fdccca8c27a06fa98d';
  private _urlBase: string = 'https://v6.exchangerate-api.com/v6';
  private codes: [] = [];

  constructor(private http: HttpClient) {}

  getUrlBase() {
    return this._urlBase;
  }

  getApiKey() {
    return this._apiKey;
  }

  getListaMoedasApi() {
    const result = this.http.get<Moedas>(
      `${this._urlBase}/${this._apiKey}/codes`
    );
    return result;
  }

  getSuportedCodes() {
    const result = this.getListaMoedasApi();
    result.subscribe();
  }
}
