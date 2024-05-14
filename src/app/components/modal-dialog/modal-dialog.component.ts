import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.css',
})
export class ModalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensagem: string
  ) {}

  confirmarExclusao() {
    this.dialogRef.close(true);
  }

  cancelarExclusao() {
    this.dialogRef.close(false);
  }
}
