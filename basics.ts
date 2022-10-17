let numero: number = 1;
let saludo: string = "Hola";

numero = "hola"; // Error
saludo = 1; // Error

// Path: arrays.ts
let numeros: number[] = [1, 2, 3];
let saludos: string[] = ["Hola", "Mundo"];
let numerosYStrings: (number | string)[] = [1, "Hola"];
let booleanos: boolean[] = [true, false];
