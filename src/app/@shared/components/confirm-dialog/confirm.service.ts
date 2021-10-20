import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {DialogueComponent} from './dialogue.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  dialogRef!: MatDialogRef<DialogueComponent>;

  constructor(private dialog: MatDialog) {
  }

  public open(options: { title: string; cancelText: string; confirmText?: string; message?: string; }): void {
    this.dialogRef = this.dialog.open(DialogueComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
      },
    });
  }

  public confirmed(): Observable<boolean> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }
}
