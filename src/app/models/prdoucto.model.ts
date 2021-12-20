export interface Producto{
  id:number;
  proveedor_id:number;
  categoria_id:number;
  nombre:string;
  foto:string;
  codigo:string;
  precio_compra:number;
  precio_venta:number;
  margen:number;
  fecha:string;
  estado:string;
  created_at:string;
  updated_at:string;
}
