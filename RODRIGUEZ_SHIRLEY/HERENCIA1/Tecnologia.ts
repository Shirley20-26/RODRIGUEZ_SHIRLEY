class Tecnologia extends Producto {
    public garantia: number;
    public accesorios: string;
   constructor (codigo:number, seccion: string, garantia: number, accesorios: string) {
  super (codigo ,seccion);
    this.garantia = garantia;
    this.accesorios = accesorios;
 }
 subirvolumen () {
 }
 abriryotube () {  
 }
}