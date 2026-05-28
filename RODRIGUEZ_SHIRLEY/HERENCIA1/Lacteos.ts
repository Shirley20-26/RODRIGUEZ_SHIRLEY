class lacteos extends Producto {
    public empaque: string;
    public precio: number;
    constructor (codigo: number, seccion: string, empaque: string, precio: number) {
        super (codigo ,seccion);
        this.empaque = empaque;
        this.precio = precio;
    }
    verificarprecio () {
        return this.precio;
    }
    mostraringredientes () {
    }
}
