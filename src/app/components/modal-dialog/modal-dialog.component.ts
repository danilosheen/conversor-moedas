import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';
import { LocalStorageService } from '../../services/local-storage.service';
import { DialogAnimationsExampleDialog } from './dialog-animations/dialog-animations.component';

// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
//   standalone: true,
//   imports: [
//     MatButtonModule,
//     MatDialogActions,
//     MatDialogClose,
//     MatDialogTitle,
//     MatDialogContent,
//     A11yModule,
//   ],
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}

//   @Output() public onYesClicked: EventEmitter<void> = new EventEmitter();

//   yesClicked() {
//     this.onYesClicked.emit();
//   }
// }

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
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
    });
  }
}
