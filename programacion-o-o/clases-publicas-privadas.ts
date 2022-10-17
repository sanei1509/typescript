// CLASE SIN CONSTRUCTOR

class Auto {
  ruedasTamaño: string[] = ["pequeña", "mediana", "grande"];
  velocidadMax: number;
  marca: string;
}
// creamos un auto
let auto: Auto = new Auto();
auto.ruedasTamaño = ["pequeña", "mediana", "grande"];
auto.velocidadMax = 200;
auto.marca = "Ford";

// otra opcion de auto
let auto2: Auto = new Auto();
auto2.ruedasTamaño = ["grande"];
auto2.velocidadMax = 100;
auto2.marca = "Fiat";

// CLASE CON CONSTRUCTOR
class Auto2 {
  ruedasTamaño: string[] = ["pequeña", "mediana", "grande"];
  velocidadMax: number;
  marca: string;

  constructor(velocidadMax: number, marca: string) {
    this.velocidadMax = velocidadMax;
    this.marca = marca;
  }
}
// creamos un auto
let auto3: Auto2 = new Auto2(200, "Ford");
auto3.ruedasTamaño = ["pequeña", "mediana", "grande"];

// otra opcion de auto
let auto4: Auto2 = new Auto2(100, "Fiat");
auto4.ruedasTamaño = ["grande"];

// CLASE CON CONSTRUCTOR Y PROPIEDADES PUBLICAS
class Auto3 {
  constructor(public velocidadMax: number, public marca: string) {}
}
// creamos un auto
let auto5: Auto3 = new Auto3(200, "Ford");
auto5.velocidadMax = 200;
auto5.marca = "Ford";

// otra opcion de auto
let auto6: Auto3 = new Auto3(100, "Fiat");
auto6.velocidadMax = 100;
auto6.marca = "Fiat";

// CLASE CON CONSTRUCTOR Y PROPIEDADES PUBLICAS Y PRIVADAS
class Auto4 {
  constructor(public velocidadMax: number, private marca: string) {}
}
// creamos un auto
let auto7: Auto4 = new Auto4(200, "Ford");
auto7.velocidadMax = 200;
// auto7.marca = "Ford"; // Error

// otra opcion de auto
let auto8: Auto4 = new Auto4(100, "Fiat");
auto8.velocidadMax = 100;
// auto8.marca = "Fiat"; // Error

// La diferencia entre una clase publica y una privada es que la privada no se puede instanciar fuera de la clase
