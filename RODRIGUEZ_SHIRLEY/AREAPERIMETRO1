export abstract class Figura {
    protected lado1: number;
    protected lado2: number;
    protected lado3: number;
    protected lado4: number;
    protected _area: number = 0;
    protected _perimetro: number = 0;
    constructor (lado1: number, lado2: number, lado3: number, lado4: number) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
    this.lado4 = lado4; 
}
abstract calculararea () : number;
abstract calcularperimetro (): number;
getArea(): number {
    return this._area;
} 
setArea(valor: number): void {
    if(valor >= 0) {
        this._area = valor;
    }
}
getperimetro(): number {
    return this._perimetro;
}
setperimetro(valor: number): void{
    if(valor >= 0) {
        this._perimetro = valor;
    }
}
}
