import { TipoEmpleado } from 'src/app/models/tipoEmpleado.model';
import { Persona } from "./persona.model";

export interface Empleado{
  id:number;
  peresona_id:number;
  user_id:number;
  tipo_empleado_id:number;
  estado:string;
  created_at:string;
  updated_at:string;
  persona:Persona;
}
