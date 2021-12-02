import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackService } from '../../shared/snack/snack.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin:any;
  public lookButton = false;

  constructor(
    private _userServicie:UsuarioService,
    private _snackService:SnackService,
    private cookieService:CookieService,
    private router:Router
    ) {

    this.userLogin = new Usuario();
  }

  ngOnInit(): void {
  }

  login(){

    if(this.userLogin.email.length == 0){
      this._snackService.open('Ingrese email !!', 'text-red');
      return;
    }else
    if(this.userLogin.password.length == 0){
      this._snackService.open('Ingrese contraseña !!', 'text-red');
      return;
    }else{
      this.lookButton = true;
      let json = { usuario: this.userLogin }
      this._userServicie.login(json)

      .subscribe((res:any) => {

        if(res.status){
          this._snackService.open('Bienvenido !!');
          // console.log(res);
          this.cookieService.set('user', JSON.stringify(res.data));
          this.router.navigateByUrl('app/home');
        }else{
          this._snackService.open(res.message, 'text-red');
          this.lookButton = false;
        }

      });
    }
  }
}
