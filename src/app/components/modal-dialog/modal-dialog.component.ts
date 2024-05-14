import { Component, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '../../services/local-storage.service';
import { DialogAnimationsExampleDialog } from './dialog-animations/dialog-animations.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatIconModule,
  ],
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.css',
})
export class ModalDialogComponent {
  @Input() public cardTitleIndex: number = 0;

  constructor(
    public dialog: MatDialog,
    private localStorageService: LocalStorageService
  ) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const ref = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    ref.componentInstance.onYesClicked.subscribe((event) => {
      this.localStorageService.removerConversao(this.cardTitleIndex);
      console.log(this.cardTitleIndex);
      console.log('fui clicado');
    });
  }
}
