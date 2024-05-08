import { Injectable } from '@angular/core';
import { IConversor } from '../interfaces/iresponse-api-convert';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  salvarConversao(conversao: IConversor, valor: string, data: Date) {
    // Recupera os dados já armazenados no localStorage
    let conversoesSalvas = JSON.parse(
      localStorage.getItem('conversoes') || '[]'
    );

    // Cria um novo objeto de conversão
    const novaConversao = {
      data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
      hora: `${data.getHours()}:${data.getMinutes()}`,
      moedaOrigem: conversao.base_code,
      moedaDestino: conversao.target_code,
      resultado: conversao.conversion_result,
      taxa: conversao.conversion_rate,
      valor: valor,
    };

    // Adiciona a nova conversão ao array de conversões
    conversoesSalvas.push(novaConversao);
    console.log(conversoesSalvas);

    // Armazena o array atualizado no localStorage
    localStorage.setItem('conversoes', JSON.stringify(conversoesSalvas));
  }

  // Função para remover uma conversão do localStorage com base no índice
  removerConversao(index: number) {
    // Recupera o array de conversões do localStorage
    let conversoesSalvas = JSON.parse(
      localStorage.getItem('conversoes') || '[]'
    );

    // Verifica se o índice está dentro dos limites do array
    if (index >= 0 && index < conversoesSalvas.length) {
      // Remove o objeto no índice especificado
      conversoesSalvas.splice(index, 1);

      // Atualiza o array de conversões no localStorage
      localStorage.setItem('conversoes', JSON.stringify(conversoesSalvas));

      // Atualiza a página
      window.location.reload();
    }
  }
}
