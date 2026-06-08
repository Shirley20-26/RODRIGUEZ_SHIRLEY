import { Rectangulo } from "./rectangulo";

let rect = new Rectangulo(5, 3);
console.log("Área del rectángulo: " + rect.calculararea());
console.log("Perímetro del rectángulo: " + rect.calcularperimetro());  

import { Cuadrado } from "./cuadrado";

const cuad = new Cuadrado(4);
console.log("Área del cuadrado: " +  cuad.calculararea());
console.log("Perímetro del cuadrado: " + cuad.calcularperimetro());  
