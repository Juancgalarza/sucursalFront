import { MatSnackBar } from '@angular/material/snack-bar';
import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { ValidacionService } from './../../../servicios/validacion/validacion.service';
import { Negocio } from './../../../models/negocio.model';
import { Horario } from './../../../models/horario.model';
import { interval, Observable } from 'rxjs';
import { GeneralService } from './../../../servicios/general/general.service';
import { Provincia } from './../../../models/pronvincia.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TipoNegocio } from 'src/app/models/tipoNegocio.model';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Seccion } from 'src/app/models/seccion.model';
import { TipoEmpleado } from 'src/app/models/tipoEmpleado.model';
import { Empleado } from 'src/app/models/empleado.modet';
import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackService } from 'src/app/shared/snack/snack.service';

@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
  styleUrls: ['./nueva-sucursal.component.css']
})
export class NuevaSucursalComponent implements OnInit {

  public tiposNegocios:Observable<TipoNegocio[]> | undefined;
  public provincias:Observable<Provincia[]> | undefined;
  public ciudades:Observable<Ciudad[]> | undefined;
  public secciones:Observable<Seccion[]> | undefined;
  public horarios:Observable<Horario[]> | undefined;
  public tipoEmpleados:Observable<TipoEmpleado[]> | undefined;
  public empleados:Observable<Empleado[]> | undefined;

  public form!: FormGroup;
  public submitted = false;
  public lookButton = false;

  public negocio!:Negocio;

  constructor(
    private _generalService:GeneralService,
    private _empleadoService:EmpleadoService,
    private builder:FormBuilder,
    private _validacionService:ValidacionService,
    private _negocioService:NegocioService,
    private _snackService:SnackService,
  ) {
    this.iniciarForm();
    this.initNegocio();
   }

  ngOnInit(): void {
    this.getTiposNegocios();
    this.getProvincias();
    this.getSecciones();
    this.getHorarios();
    this.getTipoEmpleado();
  }

  iniciarForm(){
    this.form = this.builder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        tipo_negocio_id: ['0'],
        provincia_id: ['0'],
        ciudad_id: ['0'],
        seccion_id: ['0'],
        horario_id: ['0'],
        tipo_empleo_id: ['0'],
        empleado_id: ['0'],
        ubicacion: ['', [Validators.required, Validators.minLength(10)]]
      }
    );
  }

  initNegocio(){
    this.negocio = {
      id: 0,
      nombre: '',
      tipo_negocio_id: 0,
      empleado_id: 0,
      provincia_id: 0,
      ciudad_id: 0,
      foto: '',
      estado: 'A',
      created_at: '',
      updated_at: '',
      seccion_id: 0,
      horario_id: 0,
      tipo_empleo_id:0,
      ubicacion: ''
    }
  }

  getTiposNegocios(){
    this.tiposNegocios = this._generalService.getTiposNegocio();
  }

  getProvincias(){
    this.provincias = this._generalService.getProvincias();
  }

  selectProvincia(event:any){
    let provincia_id:string = event.value;
    this.ciudades = this._generalService.getCiudades(provincia_id);

    if(parseInt(provincia_id) > 0){
      this.negocio.provincia_id = parseInt(provincia_id);
    }else{
      this.negocio.provincia_id =0;
    }
  }

  getSecciones(){
    this.secciones = this._generalService.getSeccion();
  }

  getHorarios(){
    this.horarios = this._generalService.getHorarios();
  }

  getTipoEmpleado(){
    this.tipoEmpleados = this._generalService.getTipoEmpleo();
  }

  getEmpleados(event:any){
    let tipo_empleado_id  = event.value;
    let campo = 'tipo_empleado_id';

    this.empleados = this._empleadoService.getEmpleadosByCampo(campo, tipo_empleado_id);

    if(parseInt(tipo_empleado_id) > 0){
      this.negocio.tipo_empleo_id = tipo_empleado_id;
    }else{
      this.negocio.tipo_empleo_id = 0;
    }
  }

  validarLetras(event:any){
    return this._validacionService.validateLetters(event);
  }

  procesarForm(){
    this.submitted = true;
    const myForm = this.form.value;

    if(this.form.valid){
      if(this.validarCombos(myForm)){
        this.negocio.nombre = myForm.nombre;
        this.negocio.tipo_negocio_id = parseInt(myForm.tipo_negocio_id);
        this.negocio.provincia_id = parseInt(myForm.provincia_id);
        this.negocio.ciudad_id = parseInt(myForm.ciudad_id);
        this.negocio.seccion_id = parseInt(myForm.seccion_id);
        this.negocio.horario_id = parseInt(myForm.horario_id);
        this.negocio.tipo_empleo_id = parseInt(myForm.tipo_empleo_id);
        this.negocio.empleado_id = parseInt(myForm.empleado_id);
        this.negocio.ubicacion = myForm.ubicacion;

        this.submitted = false;
        this.lookButton = true;

        this._negocioService.create({negocio: this.negocio})
        .subscribe((res:any) => {

          if(res.estado){
            this.form.reset();
            this._snackService.open(res.mensaje, 'text-success');;
          }else{
            this._snackService.open(res.mensaje, 'text-danger');;
          }

          this.lookButton = false;
        });
      }
      // this.submitted = false;
    }else{
      console.log("form invalid");
    }
  }

  selectipoNegocio(event:any){
    let id = parseInt(event.value);

    this.negocio.tipo_negocio_id = id > 0 ? id : 0;
  }

  selectCiudad(event:any){
    let id = parseInt(event.value);

    this.negocio.ciudad_id = (id > 0 ) ? id : 0;
  }

  selectSeccion(event:any){
    let id = parseInt(event.value);
    this.negocio.seccion_id = (id > 0 ) ? id: 0;
  }

  selectHorario(event:any){
    let id = parseInt(event.value);
    this.negocio.horario_id = (id > 0) ? id : 0;
  }

  selectEmpleado(event:any){
    let id = parseInt(event.value);
    this.negocio.empleado_id = (id > 0) ? id : 0;
  }

  validarCombos(form:any){
    if(form.tipo_negocio_id == 0){
      return false;
    }else
    if(form.provincia_id == 0){
      return false;
    }else
    if(form.ciudad_id == 0){
      return false;
    }else return true;
  }

  get f(){
    return this.form.controls;
  }
}
