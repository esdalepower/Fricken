
const platos = [
  "Combo Clásico",
  "Combo Picante",
  "Alitas BBQ",
  "Nuggets de Pollo",
  "Tenders Crocantes",
  "Combo Familiar",
  "Sandwich Fricken",
  "Combo Fricken Jr"
];

const menu = document.getElementById("menu");

platos.forEach((plato, index) => {
  const div = document.createElement("div");
  div.className = "plato";
  div.innerHTML = `
    <h3>${plato}</h3>
    <button onclick="agregar('${plato}')">Agregar</button>
  `;
  menu.appendChild(div);
});

let carrito = [];

function agregar(plato) {
  carrito.push(plato);
  alert(`${plato} agregado al pedido`);
}

function enviarPedido() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const pago = document.getElementById("pago").value;

  if (!nombre || !telefono || !direccion || !pago || carrito.length === 0) {
    alert("Por favor completa todos los campos y agrega al menos un producto.");
    return;
  }

  const resumen = carrito.map(p => `• ${p}`).join("%0A");
  const mensaje = `*Pedido Fricken*:%0A%0A${resumen}%0A%0A*Nombre:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Dirección:* ${direccion}%0A*Forma de pago:* ${pago}`;

  const numero = "584145258338"; // ← Reemplaza con tu número de WhatsApp
  window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}
