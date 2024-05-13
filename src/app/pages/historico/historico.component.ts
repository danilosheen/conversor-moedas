import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
@Component({
  selector: 'app-historico',
  standalone: true,
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css',
  imports: [NgFor, ModalDialogComponent, NgClass],
})
export class HistoricoComponent {
  constructor(private localStorageService: LocalStorageService) {}
  conversoes = JSON.parse(localStorage.getItem('conversoes') || '[]');

  removerConversao(index: number) {
    this.localStorageService.removerConversao(index);
  }

  isValorConvertidoMaiorQueMil(conversao: any): boolean {
    return conversao.valor > 1000;
  }
}
