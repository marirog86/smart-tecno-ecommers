let opcion;
let cantCuotas;
let seguirComprando = true;
let planPago;
let productoValido = true;
let opcionValida = true;
let seguirComprandoString;
let recargo;
let precioFinal;

let usuarios = ["María García", "Pedro Rodriguez", "José Perez"];


<div class="catalogo-item item1">
                <img src="./img/apple-iphone15-pro.jpg" alt="">
                <h2>Iphone 15 Pro</h2>
                <p>llevalo en 12 cuotas de U$S115 </p>
                <a href="" class="boton">Agregar al carrito</a>
</div>


//*FUNCION SE FIJA SI EL USUARIO SE ENCUENTRA EN EL ARRAY DE USUARIOS Y SINO LO AGREGA

function identificaciónUsuario() {
    let nombre = prompt(`Ingresa tu nombre: `);
    let usuarioEncontrado = usuarios.find((usuario) => usuario === nombre);
    if (usuarioEncontrado == undefined) {
        usuarios.push(nombre);
    }
    alert(`Bienvenid@, ${nombre}`);
    return usuarios.indexOf(nombre);
}

//*FUNCION QUE SE ENCARGA DE AGREGAR PRODUCTOS AL CARRITO

function elegirProducto() {
    do {
        opcion = prompt(`Selecciona un producto: 
            1. Iphone 15 Pro  
            2. Iphone 15
            3. Iphone 14
            4. Smartwatch
            5. Samsung Galaxy S24
            6. Cancelar compra`);
        switch (opcion) {
            case "1":
                producto1.cantidad=parseInt(prompt("Ingresa la cantidad:"));
                carrito.push(producto1);
                productoValido = true;
                alert(`Agregaste  ${producto1.cantidad}  ${producto1.nombre} al carrito. Precio U$S ${producto1.precio * producto1.cantidad}`);
                break;
            case "2":
                producto2.cantidad = parseInt(prompt("Ingresa la cantidad:"));
                carrito.push(producto2);
                productoValido = true;
                alert(`Agregaste  ${producto2.cantidad}  ${producto2.nombre} al carrito. Precio U$S ${producto2.precio * producto2.cantidad}`);
                break;
            case "3":
                producto3.cantidad = parseInt(prompt("Ingresa la cantidad:"));
                carrito.push(producto3);
                productoValido = true;
                alert(`Agregaste  ${producto3.cantidad}  ${producto3.nombre} al carrito. Precio U$S ${producto3.precio * producto3.cantidad}`);
                break;
            case "4":
                producto4.cantidad = parseInt(prompt("Ingresa la cantidad:"));
                carrito.push(producto4);
                productoValido = true;
                alert(`Agregaste  ${producto4.cantidad}  ${producto4.nombre} al carrito. Precio U$S ${producto4.precio * producto4.cantidad}`);
                break;
            case "5":
                producto5.cantidad = parseInt(prompt("Ingresa la cantidad:"));
                carrito.push(producto5);
                productoValido = true;
                alert(`Agregaste  ${producto5.cantidad}  ${producto5.nombre} al carrito. Precio U$S ${producto5.precio * producto5.cantidad}`);
                break;
            case "6":
                seguirComprando = false;
                productoValido = false;
                break;
            default:
                alert("Producto Inválido");
                productoValido = false;
        }
        do {
            if (productoValido) {
                seguirComprandoString = prompt(`
                        1. Seguir comprando
                        2. Finalizar compra`)
                switch (seguirComprandoString) {
                    case "1":
                        seguirComprando = true;
                        opcionValida = true;
                        break;
                    case "2":
                        seguirComprando = false;
                        opcionValida = true;
                        break;
                    default:
                        alert("Opción Inválida");
                        opcionValida = false;
                }
            }
        } while (!opcionValida);
    } while (seguirComprando);
    return opcion;
}

//*FUNCION QUE SE ENCARGA DE SELECCIONAR EL PLAN DE PAGOS

function elegirPlanPago() {
    do {
        planPago = prompt(`Selecciona plan de pagos:
            1. Contado 
            2. 3 cuotas (5% recargo)
            3. 6 cuotas (10% recargo)
            4. 12 cuotas (15% recargo)`);
        switch (planPago) {
            case "1":
                cantCuotas = "Contado";
                opcionValida = true;
                recargo=0;
                alert(`Elegiste pagar ${cantCuotas}. Precio final U$S ${precioFinal}`);
                break;
            case "2":
                cantCuotas = "en 3 cuotas";
                recargo = 0.05
                precioFinal *= (1+recargo);
                opcionValida = true;
                alert(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal / 3).toFixed(2)}`);
                break;
            case "3":
                cantCuotas = "en 6 cuotas";
                recargo = 0.1
                precioFinal *= (1+recargo);
                opcionValida = true;
                alert(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal / 6).toFixed(2)}`);
                break;
            case "4":
                cantCuotas = "en 12 cuotas";
                recargo = 0.15
                precioFinal *= (1+recargo);
                opcionValida = true;
                alert(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal / 12).toFixed(2)}`);
                break;
            default:
                alert("Opción Inválida");
                opcionValida = false;
        }
    } while (!opcionValida)
        return recargo;
} 

let indice = identificaciónUsuario();
let accion = 0;

//* CONSULTA AL USUARIO SI QUIERE VISUALIZAR EL CATÁLOGO, FILTRAR EL CATÁLOGO POR ALGUNA CATEGORÍA EN PARTICULAR O IR A COMPRAR
do {
    accion=prompt(`Como quieres comenzar, ${usuarios[indice]}: 
        1. Ver catalogo
        2. Filtrar catalogo
        3. Ir a comprar `)
    if (accion == "1"){
        catalogo.forEach((producto) => {
            console.log(producto.nombre + ": U$S" + producto.precio);
        })
    }else if (accion == "2"){
        categoria = prompt(`Escribe la categoria que estas buscando:`);
        let catalogoFiltrado = catalogo.filter((producto) => producto.categoria.toLowerCase() == categoria.toLowerCase());
        if (catalogoFiltrado.length == 0){
            alert("No existen articulos de esta categoria");
        } else {
            catalogoFiltrado.forEach((producto) => {
                console.log(producto.nombre + ": U$S" + producto.precio);
            })
        } 
    } else {
        if (accion != "3"){
            alert("Opcion Invalida");
        }
    }
}while (accion !="3")

compra = elegirProducto();

let salir = false;

carrito.forEach((producto) => {
    console.log(producto.cantidad + " " + producto.nombre + ": U$S" + producto.precio + " por unidad");
})

//* CONSULTA AL CLIENTE SI QUIERE ELIMINAR ALGUN PRODUCTO DEL CARRITO 
if (compra != "6") {
    do {
        let confirmacion = prompt(`
            1. Confirmar compra
            2. Modificar carrito `)
        if (confirmacion == "2") {
            const nombreProducto = prompt("Ingrese el nombre del producto a eliminar:");
            const indiceProducto = carrito.findIndex(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
            if (indiceProducto !== -1) {
                carrito.splice(indiceProducto, 1);
                console.log(`El producto "${nombreProducto}" ha sido eliminado del carrito.`);
                carrito.forEach((producto) => {
                    console.log(producto.cantidad + " " + producto.nombre + ": U$S" + producto.precio + " por unidad");
                });
                if (carrito.length == 0){
                    salir = true;
                }
            } else {
                console.log(`El producto "${nombreProducto}" no se encuentra en el carrito.`);
            }
        } else if ((confirmacion == "1")) {
            salir = true;
        }
    } while (!salir);
}

//* SE IMPRIME EL RESUMEN DE LA COMPRA 

if (carrito.length != 0) {
    precioFinal = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);

    let cargo = elegirPlanPago();
    console.log(`${usuarios[indice]}, el resumen de tu compra es:`);
    carrito.forEach((producto) => {
        console.log(producto.cantidad + " " + producto.nombre + ": U$S" + producto.precio + " por unidad");
    })
    console.log(`Precio final: U$S ${precioFinal.toFixed(2)}`);
    console.log(`Recargo por plan de pagos: U$S ${(precioFinal * cargo) / (1 + cargo).toFixed(2)} `);
    const fechaCompra = new Date();
    console.log(`Fecha y hora de compra: ${fechaCompra} `)
} else {
    alert("Compra cancelada");
}