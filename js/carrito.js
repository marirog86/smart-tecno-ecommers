const seccionProductos=document.querySelector(".catalogo-principal");
const seccionCarrito=document.querySelector(".carrito");
const seccionSmartphones=document.querySelector(".catalogo-smartphones");
const seccionWearables=document.querySelector(".catalogo-wearables");
const botonSmartphones=document.querySelector(".btn-smartphones");
const botonWearables=document.querySelector(".btn-wearables");
const botonBorrarFiltro=document.querySelector(".btn-borrar-filtro");



class Producto {
    constructor(nombre, precio, categoria, id, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.id=id;
        this.imagen=imagen;
        this.cantidad=cantidad;
    }
}

const producto1 = new Producto("Iphone 15 Pro", 1200, "Smartphone", "producto1","./img/apple-iphone15-pro.jpg",0);
const producto2 = new Producto("Iphone 15", 1000, "Smartphone","producto2","./img/apple-iphone15.jpg",0);
const producto3 = new Producto("Iphone 14 Pro", 900, "Smartphone","producto3","./img/iPhone14-pro.jpg",0);
const producto4 = new Producto("Iphone 14", 800, "Smartphone","producto4","./img/iPhone14.jpg",0);
const producto5 = new Producto("Samsung Galaxy S24", 1100, "Smartphone","producto5","./img/samsung-galaxy-s24.jpg",0);
const producto6 = new Producto("Smartwatch 1", 200, "Smartwatch","producto6","./img/samsung-galaxy-fit-3.webp",0);
const producto7 = new Producto("Smartwatch 2", 250, "Smartwatch","producto7","./img/reloj-smartwatch-samsung-galaxy-watch-7.webp",0);
const producto8 = new Producto("Smartwatch 3", 150, "Smartwatch","producto8","./img/samsung-galaxy-watch-6.webp",0);
const producto9 = new Producto("Smartwatch 4", 300, "Smartwatch", "producto9", "./img/apple-watch-series-9.webp",0);
const producto10 = new Producto("Smartwatch 5", 100, "Smartwatch","producto10","./img/apple-watch-ultra.webp",0);

let catalogo = [producto1 , producto2 , producto3 , producto4 , producto5, producto6, producto7, producto8, producto9, producto10];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


actualizarCarrito();

function mostrarCatalogo(catalogo,seccion){
    seccionSmartphones.innerHTML = '';
    seccionWearables.innerHTML = '';
    seccion.innerHTML='';
    
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

mostrarCatalogo(catalogo,seccionProductos);


botonSmartphones.addEventListener("click", () => {filtrarProductos("Smartphone", seccionSmartphones)});
botonWearables.addEventListener("click", () => {filtrarProductos("Smartwatch", seccionWearables)});
botonBorrarFiltro.addEventListener("click", () => {borrarFiltro()});

function borrarFiltro(){
    seccionSmartphones.classList.toggle("ocultar");
    seccionWearables.classList.toggle("ocultar");
    seccionProductos.classList.toggle("ocultar");
}


function filtrarProductos(categoria, seccion){

        seccionSmartphones.innerHTML = '';
        seccionWearables.innerHTML = '';
        seccion.innerHTML='';

    
        const catalogoFiltrado = catalogo.filter((producto) => producto.categoria === categoria);
        mostrarCatalogo(catalogoFiltrado, seccion);
        
        seccionSmartphones.classList.toggle("ocultar", categoria !== "Smartphone");
        seccionWearables.classList.toggle("ocultar", categoria !== "Smartwatch");
        seccionProductos.classList.toggle("ocultar", true);
    
}


function actualizarCarrito() {
    seccionCarrito.innerHTML = '<h2>Resumen del carrito</h2>';
    if (carrito.length == 0){
        const parrafoCarrito = document.createElement("p");
        parrafoCarrito.innerText = `Tu carrito está vacío 😢😢😢`;
        seccionCarrito.append(parrafoCarrito);
    } else{
        carrito.forEach((producto) => {
            const divProducto=document.createElement("div");
            divProducto.className="divProducto";
            const parrafoCarrito = document.createElement("p");
            parrafoCarrito.className = "carrito-item";
            parrafoCarrito.innerText = `${producto.nombre} - Precio Unitario: U$S${producto.precio} - Cantidad: ${producto.cantidad}`;
            divProducto.append(parrafoCarrito);
            const botonBorrar=document.createElement("button");
            botonBorrar.innerText="❌"
            divProducto.append(botonBorrar);
            botonBorrar.addEventListener("click",() => {borrarProducto(producto)});
            seccionCarrito.append(divProducto);
        });
    
        let total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        const parrafoTotal = document.createElement("p");
        parrafoTotal.innerText = `Total a pagar: U$S ${total}`;
        seccionCarrito.append(parrafoTotal);

        let papelera=document.createElement("button");
        papelera.className="boton"
        papelera.innerHTML=`<img src="./img/papelera-de-reciclaje.png" class="papelera">`;
        papelera.addEventListener("click", () => {
            vaciarCarrito();
        });
        seccionCarrito.append(papelera);

    }
    
}

function borrarProducto(producto){
    let indice=carrito.indexOf(producto);
    carrito.splice(indice,1);
    actualizarCarrito();
}

function vaciarCarrito(){
    carrito = [];
    actualizarCarrito();
}

function agregarAlCarrito(producto){
    let productoEncontrado = carrito.find((item) => item.id === producto.id );

    if (productoEncontrado){
        productoEncontrado.cantidad +=1;
    } else{
        producto.cantidad = 1;
        carrito.push(producto);
    }
    actualizarCarrito();    
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

