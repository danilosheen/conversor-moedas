import { A11yModule } from '@angular/cdk/a11y';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animations',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    A11yModule,
  ],
  templateUrl: './dialog-animations.component.html',
  styleUrl: './dialog-animations.component.css',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}

  @Output() public onYesClicked: EventEmitter<void> = new EventEmitter();

  yesClicked() {
    this.onYesClicked.emit();
  }
}
