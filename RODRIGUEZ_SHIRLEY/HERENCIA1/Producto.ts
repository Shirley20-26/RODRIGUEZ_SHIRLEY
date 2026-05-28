class Producto {
 public codigo: number; 
 public seccion: string;
 constructor (codigo: number, seccion: string) {
    this.codigo = codigo;
    this.seccion = seccion;
 }
 mostrarcodigo() {
    return this.codigo; 
 }   
 mostrarseccion() {
    return this.seccion;
 }
}