import { Figura } from "./figurasgeometricas";
export class Cuadrado extends Figura {
    constructor(lado: number) {
        super(lado, lado, lado, lado);
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
