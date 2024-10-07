const seccionProductos = document.querySelector(".catalogo-principal");
const seccionCarrito = document.querySelector(".carrito");
const seccionSmartphones = document.querySelector(".catalogo-smartphones");
const seccionWearables = document.querySelector(".catalogo-wearables");
const botonSmartphones = document.querySelector(".btn-smartphones");
const botonWearables = document.querySelector(".btn-wearables");
const botonBorrarFiltro = document.querySelector(".btn-borrar-filtro");




let catalogo = [];

fetch("./datos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        catalogo = datos;
        mostrarCatalogo(catalogo, seccionProductos);
    })

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


actualizarCarrito();

function mostrarCatalogo(catalogo, seccion) {
    seccionSmartphones.innerHTML = '';
    seccionWearables.innerHTML = '';
    seccion.innerHTML = '';

    catalogo.forEach((producto) => {
        const divProducto = document.createElement("div");
        divProducto.className = `catalogo-item`;
        divProducto.innerHTML = `
                        <img src=${producto.imagen} alt="">
                        <h2>${producto.nombre}</h2>
                        <p>llevalo en 12 cuotas de U$S${(producto.precio * 1.15 / 12).toFixed(2)}</p>
                        <button class="boton ${producto.id}">Agregar al carrito</button>
            `;
        seccion.append(divProducto);

        const botonAgregar = divProducto.querySelector(`.${producto.id}`);
        botonAgregar.addEventListener("click", () => { agregarAlCarrito(producto) });

    });
}

mostrarCatalogo(catalogo, seccionProductos);


botonSmartphones.addEventListener("click", () => { filtrarProductos("Smartphone", seccionSmartphones) });
botonWearables.addEventListener("click", () => { filtrarProductos("Smartwatch", seccionWearables) });
botonBorrarFiltro.addEventListener("click", () => { borrarFiltro() });

function borrarFiltro() {
    seccionSmartphones.classList.toggle("ocultar");
    seccionWearables.classList.toggle("ocultar");
    seccionProductos.classList.toggle("ocultar");
}


function filtrarProductos(categoria, seccion) {

    seccionSmartphones.innerHTML = '';
    seccionWearables.innerHTML = '';
    seccion.innerHTML = '';


    const catalogoFiltrado = catalogo.filter((producto) => producto.categoria === categoria);
    mostrarCatalogo(catalogoFiltrado, seccion);

    seccionSmartphones.classList.toggle("ocultar", categoria !== "Smartphone");
    seccionWearables.classList.toggle("ocultar", categoria !== "Smartwatch");
    seccionProductos.classList.toggle("ocultar", true);

}


function actualizarCarrito() {
    seccionCarrito.innerHTML = '<h2>Resumen del carrito</h2>';
    if (carrito.length == 0) {
        const parrafoCarrito = document.createElement("p");
        parrafoCarrito.innerText = `Tu carrito está vacío 😢😢😢`;
        seccionCarrito.append(parrafoCarrito);
    } else {
        carrito.forEach((producto) => {
            const divProducto = document.createElement("div");
            divProducto.className = "divProducto";
            const parrafoCarrito = document.createElement("p");
            parrafoCarrito.className = "carrito-item";
            parrafoCarrito.innerText = `${producto.nombre} - Precio Unitario: U$S${producto.precio} - Cantidad: ${producto.cantidad}`;
            divProducto.append(parrafoCarrito);
            const botonBorrar = document.createElement("span");
            botonBorrar.innerHTML = `<img src="./img/borrar.png" class="papelera">`
            divProducto.append(botonBorrar);
            botonBorrar.addEventListener("click", () => { borrarProducto(producto) });
            seccionCarrito.append(divProducto);
        });

        let total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        const parrafoTotal = document.createElement("p");
        parrafoTotal.innerText = `Total a pagar: U$S ${total}`;
        seccionCarrito.append(parrafoTotal);

        let papelera = document.createElement("button");
        papelera.className = "boton"
        papelera.innerHTML = `<img src="./img/papelera-de-reciclaje.png" class="papelera">`;
        papelera.addEventListener("click", () => {
            vaciarCarrito();
        });
        seccionCarrito.append(papelera);

    }

}

function borrarProducto(producto) {
    let indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    localStorage.removeItem(producto);
    Swal.fire("El producto se eliminó del carrito");
    actualizarCarrito();
}

function vaciarCarrito() {
    Swal.fire({
        title: "Estás seguro?",
        text: "Esta acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, eleminalo!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado!",
                text: "Tu carrito ha sido vaciado",
                icon: "success"
            });
            carrito = [];
            localStorage.clear();
            actualizarCarrito();
        }
    });
}

function agregarAlCarrito(producto) {
    let productoEncontrado = carrito.find((item) => item.id === producto.id);

    if (productoEncontrado) {
        productoEncontrado.cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    Swal.fire("El producto se agregó al carrito");
    actualizarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


