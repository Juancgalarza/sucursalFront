import { ValidacionService } from './../../../servicios/validacion/validacion.service';
import { Proveedor } from './../../../models/proveedor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { SnackService } from 'src/app/shared/snack/snack.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit {

  public form!: FormGroup;
  public emailValid = false;
  public submitted = false;
  public lookButton = false;

  public proveedor!:Proveedor;

  constructor(
    private builder:FormBuilder,
    private _validarService:ValidacionService,
    private _proveedorService:ProveedorService,
    private _snak:SnackService
  ) { }

  ngOnInit(): void {
    this.initProveedor();
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = this.builder.group({
      ruc: ['', [Validators.required, Validators.minLength(13)]],
      razon_social: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      telefono2: ['', [Validators.minLength(13)]],
      direccion: ['']
    });
  }

  initProveedor(){
    this.proveedor = {
      ruc: '',
      razon_social: '',
      email: '',
      telefono: '',
      telefono2: '',
      direccion: '',
      created_at: '',
      estado: 'A',
      id: 0,
      updated_at: ''
    };
  }

  validarNumber(event:any){
    return this._validarService.validateNumber(event);
  }

  validaLetter(event:any){
    return this._validarService.validateLetters(event);
  }

  validarAlphaNumeric(event:any){
    return this._validarService.validateAphaNumeric(event);
  }

  validateEmail(event:any){

    this.emailValid = this._validarService.validarEmail(event.target.value)
  }

  procesarForm(){

    const form = this.form.value;

    if(this.form.valid && this.emailValid){
      this.proveedor.ruc = form.ruc;
      this.proveedor.razon_social = form.razon_social;
      this.proveedor.email = form.email;
      this.proveedor.telefono = form.telefono;
      this.proveedor.telefono2 = form.telefono2;
      this.proveedor.direccion = form.direccion;
      this.proveedor.estado = 'A';

      this._proveedorService.create({proveedor: this.proveedor})
      .subscribe((res:any) => {
        if(res.estado){
          this.form.reset();
          this._snak.open(res.mensaje, 'text-success');
        }else{
          this._snak.open(res.mensaje, 'text-danger');
        }
      });
    }
  }

  get f(){
    return this.form.controls;
  }
}
