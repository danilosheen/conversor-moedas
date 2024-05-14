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
    const dia = data.getDate();
    const mes =
      data.getMonth() + 1 < 10
        ? `0${data.getMonth() + 1}`
        : data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos =
      data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();

    // Cria um novo objeto de conversão
    const novaConversao = {
      data: `${dia}/${mes}/${ano}`,
      hora: `${horas}:${minutos}`,
      valor: valor,
      moedaOrigem: conversao.base_code,
      moedaDestino: conversao.target_code,
      resultado: conversao.conversion_result,
      taxa: conversao.conversion_rate,
    };

    // Adiciona a nova conversão ao array de conversões
    conversoesSalvas.push(novaConversao);

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

  removerHistorico() {
    localStorage.removeItem('conversoes');
    // Atualiza a página
    window.location.reload();
  }
}
