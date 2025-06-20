
const productos = [
  {
    categoria: "promos",
    titulo: "Mega Combo Fricken",
    descripcion: "8 piezas de pollo + papas + refresco 1L",
    precio: 12,
    imagen: "https://via.placeholder.com/300x150?text=Mega+Combo"
  },
  {
    categoria: "combos",
    titulo: "Combo Junior",
    descripcion: "4 piezas + papas pequeñas",
    precio: 5,
    imagen: "https://via.placeholder.com/300x150?text=Combo+Junior"
  },
  {
    categoria: "entradas",
    titulo: "Tequeños de Pollo",
    descripcion: "6 unidades con salsa",
    precio: 4,
    imagen: "https://via.placeholder.com/300x150?text=Teque%C3%B1os"
  }
];

let carrito = [];

function cargarProductos(filtro = "") {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  productos.filter(p => filtro === "" || p.categoria === filtro).forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.titulo}">
      <div class="card-content">
        <h3>${prod.titulo}</h3>
        <p>${prod.descripcion}</p>
        <div class="precio">${prod.precio.toFixed(2)} $</div>
      </div>
      <button onclick="agregarAlCarrito('${prod.titulo}', ${prod.precio})">Agregar</button>
    `;
    contenedor.appendChild(card);
  });
}

function filtrar(cat) {
  cargarProductos(cat);
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  alert(`${nombre} agregado al carrito`);
}

function verCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `• ${item.nombre} - ${item.precio.toFixed(2)} $`;
    lista.appendChild(li);
  });
  document.getElementById("carrito").style.display = "block";
}

function cerrarCarrito() {
  document.getElementById("carrito").style.display = "none";
}

function enviarPedido() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  let mensaje = "*Pedido Fricken*%0A";
  let total = 0;
  carrito.forEach(item => {
    mensaje += `• ${item.nombre} - ${item.precio.toFixed(2)} $%0A`;
    total += item.precio;
  });
  mensaje += `%0ATotal: $${total.toFixed(2)}`;
  window.open(`https://wa.me/584125258338?text=${mensaje}`, "_blank");
}

cargarProductos();
