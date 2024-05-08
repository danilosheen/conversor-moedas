import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [NgFor],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css',
})
export class HistoricoComponent {
  constructor(private localStorageService: LocalStorageService) {}
  conversoes = JSON.parse(localStorage.getItem('conversoes') || '[]');

  removerConversao(index: number) {
    this.localStorageService.removerConversao(index);
  }
}
