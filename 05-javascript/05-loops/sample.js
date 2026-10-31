/**
 * Ejercicio 1.
 * 1. Crea un array con al menos 5 notas (números del 0 al 20);
 * 2. Usa un ciclo for para iterar sobre todas las notas y calcular
 *    el promedio.
 * 3. Al finalizar el ciclo, clasifica el promedio en:
 *    - "Excelente" si es mayor o igual a 16
 *    - "Bueno" si es mayor o igual a 14 y menor a 16
 *    - "Regular" si es mayor o igual a 10 y menor a 14
 *    - "Insuficiente" si es menor a 10
 */

const notas = [18, 12, 7, 15, 1];
let suma = 0;

for (let nota of notas) {
  suma += nota;
  console.log(`Nota: ${nota}; Sumatoria: ${suma}`);
}

let promedio = suma / notas.length;
if (promedio >= 16) {
  console.log(`Promedio: ${promedio}; Excelente`);
} else if (promedio >= 14) {
  console.log(`Promedio: ${promedio}; Bueno`);
} else if (promedio >= 10) {
  console.log(`Promedio: ${promedio}; Regular`);
} else {
  console.log(`Promedio: ${promedio}; Insuficiente`);
}

console.log("---------------------")

/**
 * Ejercicio 2.
 * Tienes una lista de productos en un carrito de compras.
 * Cada producto es un objeto con propiedades nombre, precio y
 * enOferta (true/false).
 * 1. Crea un array con al menos 3 productos.
 * 2. Usa un ciclo for para recorrer el array. Si enOferta es true,
 *    aplica un 15% de descuento e imprime un mensaje especial. Si no,
 *    imprime su precio normal.
 */

const carrito = [
  { nombre: "Camiseta", precio: 20, enOferta: true },
  { nombre: "Pantalón", precio: 50, enOferta: false },
  { nombre: "Zapatos", precio: 80, enOferta: true },
];

for (let producto of carrito) {
  if (producto.enOferta) {
    let precioConDescuento = producto.precio * 0.85;

    console.log(
      `El producto ${producto.nombre} está en oferta. Precio con descuento: ${precioConDescuento}`,
    );
  } else {
    console.log(
      `El producto ${producto.nombre} tiene precio normal: ${producto.precio}`,
    );
  }
}

console.log("---------------------");

/**
 * Ejercicio 3.
 * Tienes un objeto que representa el stock de diferentes artículos.
 * 1. Crea un objeto con al menos 4 productos y sus respectivas
 *    cantidades.
 * 2. Usa un for para recorrer el ciclo para identificar que productos
 *    necesitan reposición urgente (<5) y muestra una alerta en
 *    consola.
 */

const inventario = {
  manzanas: 12,
  peras: 3,
  naranjas: 8,
  platanos: 2,
};

for (let producto in inventario) {
  if (inventario[producto] < 5) {
    console.log(
      `El producto ${inventario[producto]} necesita reposición urgente`,
    );
  }
}

console.log("---------------------");

/**
 * Ejercicio 4.
 * Un auto viaja y va consumiendo gasolina kilómetro a kilómetro,
 * hasta que el tanque llega 0.
 * 1. Define una variable gasolina con un valor incial y contador
 *    de kilometros en 0.
 * 2. Una ciclo while que se ejecute mientras gasolina sea mayor a
 *    0.
 * 3. En cada iteración del ciclo, resta una cantidad aleatoria de
 *    gasolina (investigar Math.random) y suma 1 kilometro.
 * 4. Imprime el estado del viaje en cada paso. Cuando la gasolina
 *    se agote, imprime que el auto se ha detenido.
 */

let gasolina = 50;
let kilometros = 0;

while (gasolina > 0) {
  let consumo = Math.random() * 5; // Consumo aleatorio entre 0 y 5

  gasolina -= consumo;
  kilometros += 1;

  console.log(
    `Kilometros: ${kilometros}, Gasolina restante: ${gasolina.toFixed(2)}`,
  );
}

console.log(
  `El auto se ha detenido después de recorrer ${kilometros} kilometros.`,
);

console.log("---------------------");