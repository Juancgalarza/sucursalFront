import { SnackComponent } from './snack/snack.component';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private snackBar: MatSnackBar,
    private _snack:MatSnackBar
  ) { }

  open(message:string, color:string = 'text-info', time:number = 2){
    return this.snackBar.open(message,"",{
      duration: (time * 1000),
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: color
    });
  }

  openSnack(data:any = null){
    this._snack.openFromComponent(SnackComponent,{
      duration: 2000
    });
  }
}
