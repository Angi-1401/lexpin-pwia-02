/**
 * La siguiente estructrura de datos representa las compras
 * realizadas en un supermercado.
 */

let ventas = [
  {
    id_compra: "C-001",
    fecha: "2026-10-25",
    cliente: { nombre: "Carlos Gómez", membresia: "Premium" },
    items: [
      { producto: "Leche Entera", cantidad: 3, precio_unitario: 1.2 },
      { producto: "Pan de Molde", cantidad: 1, precio_unitario: 2.1 },
      { producto: "Manzanas Rojas", cantidad: 6, precio_unitario: 0.45 },
    ],
    sucursal: "Norte",
    pago: { metodo: "Tarjeta de Crédito", completado: true },
  },
  {
    id_compra: "C-002",
    fecha: "2026-10-26",
    cliente: { nombre: "Ana Martínez", membresia: "Regular" },
    items: [
      { producto: "Arroz Integral 1kg", cantidad: 2, precio_unitario: 1.8 },
      { producto: "Pechuga de Pollo", cantidad: 2, precio_unitario: 5.5 },
      { producto: "Aceite de Oliva 1L", cantidad: 1, precio_unitario: 8.9 },
      { producto: "Detergente Líquido", cantidad: 1, precio_unitario: 12.4 },
    ],
    sucursal: "Centro",
    pago: { metodo: "Efectivo", completado: true },
  },
  {
    id_compra: "C-003",
    fecha: "2026-10-28",
    cliente: { nombre: "Luis Rodríguez", membresia: "Ninguna" },
    items: [
      { producto: "Agua Mineral 5L", cantidad: 4, precio_unitario: 0.95 },
      { producto: "Café Tostado 500g", cantidad: 2, precio_unitario: 4.2 },
    ],
    sucursal: "Norte",
    pago: { metodo: "Pago Móvil", completado: false },
  },
  {
    id_compra: "C-004",
    fecha: "2026-10-29",
    cliente: { nombre: "María López", membresia: "Premium" },
    items: [
      { producto: "Yogur Natural", cantidad: 5, precio_unitario: 0.9 },
      { producto: "Queso Cheddar", cantidad: 2, precio_unitario: 3.5 },
    ],
    sucursal: "Sur",
    pago: { metodo: "Tarjeta de Débito", completado: true },
  },
  {
    id_compra: "C-005",
    fecha: "2026-10-30",
    cliente: { nombre: "Pedro Fernández", membresia: "Regular" },
    items: [
      { producto: "Tomates", cantidad: 3, precio_unitario: 0.8 },
      { producto: "Lechuga", cantidad: 2, precio_unitario: 1.2 },
    ],
    sucursal: "Centro",
    pago: { metodo: "Efectivo", completado: true },
  },
];

/**
 * Realiza las siguientes operaciones sobre el registro de ventas:
 * 1. Accede al ID de la primera compra del array.
 * 2. Accede a la sucursal de la segunda compra.
 * 3. Devuelve el objeto del cliente de la tercera compra.
 * 4. Accede al nombre del cliente de la segunda compra.
 * 5. Accede al método de pago utilizado en la quinta compra.
 * 6. Accede a la cantidad del primer item de la primera compra.
 * 7. Accede al precio unitario del segundo item de la segunda compra.
 * 8. Accede al precio unitario del "Café Tostado" de la tercera compra.
 */

console.log(`ID de la primera compra: ${ventas[0].id_compra}`);
console.log(`Sucursal de la segunda compra: ${ventas[1].sucursal}`);
console.log(
  `Cliente de la tercera compra: ${JSON.stringify(ventas[2].cliente)}`,
);
console.log(
  `Nombre del cliente de la segunda compra: ${ventas[1].cliente.nombre}`,
);
console.log(`Método de pago de la quinta compra: ${ventas[4].pago.metodo}`);
console.log(
  `Cantidad del primer item de la primera compra: ${ventas[0].items[0].cantidad}`,
);
console.log(
  `Precio unitario del segundo item de la segunda compra: ${ventas[1].items[1].precio_unitario}`,
);
console.log(
  `Precio unitario del "Café Tostado" de la tercera compra: ${ventas[2].items[1].precio_unitario}`,
);
