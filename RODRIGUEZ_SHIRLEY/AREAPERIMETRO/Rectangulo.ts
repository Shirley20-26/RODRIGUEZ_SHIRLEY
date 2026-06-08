import { Figura } from "./figurasgeometricas";
export class Rectangulo extends Figura {
    constructor(base: number, altura: number) {
        super(base,altura, base, altura);
    }
    calculararea(): number {
        this.setArea(this.lado1 * this.lado2);
        return this.getArea();
    }
    calcularperimetro(): number {
        this.setperimetro (2 * (this.lado1 + this.lado2));
        return this.getperimetro();
    }
}
