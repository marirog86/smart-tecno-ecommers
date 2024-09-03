let opcion;
let cantCuotas;
let seguirComprando=true;
let precioFinal=0;
let planPago;
let productoValido=true;
let opcionValida=true;
let seguirComprandoString;

class Producto{
    constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
    }
}

let carrito=[];

function elegirProducto(){
    do{
        opcion = prompt(`Selecciona un producto: 
            1. Iphone 15 Pro  
            2. Iphone 15
            3. Iphone 14
            4. Smartwatch
            5. Samsung Galaxy S24
            6. Cancelar compra`);
            switch(opcion) {
                    case "1":
                        const producto1=new Producto("Iphone 15 Pro",1200)
                        carrito.push(producto1);
                        precioFinal +=producto1.precio;
                        productoValido=true;
                        alert(`Agregaste ${producto1.nombre} al carrito. Precio U$S ${producto1.precio}`);
                        /*console.log(`Agregaste ${producto1.nombre} al carrito. Precio U$S ${producto1.precio}`)*/
                        break;
                    case "2":
                        const producto2=new Producto("Iphone 15",1000)
                        carrito.push(producto2);
                        precioFinal +=producto2.precio;
                        productoValido=true;
                        alert(`Agregaste ${producto2.nombre} al carrito. Precio U$S ${producto2.precio}`);
                        /*console.log(`Agregaste ${producto2.nombre} al carrito. Precio U$S ${producto2.precio}`)*/
                        break;
                    case "3":
                        const producto3=new Producto("Iphone 14", 800)
                        carrito.push(producto3);
                        precioFinal +=producto3.precio;
                        productoValido=true;
                        alert(`Agregaste ${producto3.nombre} al carrito. Precio U$S ${producto3.precio}`);
                        /*console.log(`Agregaste ${producto3.nombre} al carrito. Precio U$S ${producto3.precio}`)*/
                        break;
                    case "4":
                        const producto4=new Producto("Smartwatch", 200)
                        carrito.push(producto4);
                        precioFinal +=producto4.precio;
                        productoValido=true;
                        alert(`Agregaste ${producto4.nombre} al carrito. Precio U$S ${producto4.precio}`);
                        /*console.log(`Agregaste ${producto4.nombre} al carrito. Precio U$S ${producto4.precio}`)*/
                        break;
                    case "5":
                        const producto5=new Producto("Samsung Galaxy S24", 1100)
                        carrito.push(producto5);
                        precioFinal +=producto5.precio;
                        productoValido=true;
                        alert(`Agregaste ${producto5.nombre} al carrito. Precio U$S ${producto5.precio}`);
                        /*console.log(`Agregaste ${producto5.nombre} al carrito. Precio U$S ${producto5.precio}`)*/
                        break;
                    case "6":
                        seguirComprando=false;
                        productoValido=false;
                        break;
                    default:
                        alert("Producto Inválido");
                        /*console.log("Producto Inválido");*/
                        productoValido=false;
            }
            do {
                if (productoValido){
                    seguirComprandoString=prompt(`
                        1. Seguir comprando
                        2. Finalizar compra`)
                        switch(seguirComprandoString) {
                            case "1":
                                seguirComprando=true;
                                opcionValida=true;
                                break;
                            case "2": 
                                seguirComprando=false;
                                opcionValida=true;
                                break;
                            default:
                                alert("Opción Inválida");
                                /*console.log("Opción Inválida");*/
                                opcionValida=false;
                    }
                }
            }while (!opcionValida);
    }while (seguirComprando);
    return opcion;
}

function elegirPlanPago(){
    do{
        planPago = prompt(`Selecciona plan de pagos:
            1. Contado 
            2. 3 cuotas (5% recargo)
            3. 6 cuotas (10% recargo)
            4. 12 cuotas (15% recargo)`);
            switch(planPago) {
                case "1":
                    cantCuotas="Contado";
                    opcionValida=true;
                    alert(`Elegiste pagar ${cantCuotas}. Precio final U$S ${precioFinal}`);
                    /*console.log(`Elegiste pagar ${cantCuotas}. Precio final U$S ${precioFinal}`);*/
                    break;
                case "2": 
                    cantCuotas="en 3 cuotas";
                    precioFinal *=1.05;
                    opcionValida=true;
                    alert(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/3).toFixed(2)}`);
                    /*console.log(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/3).toFixed(2)}`);*/
                    break;
                case "3": 
                    cantCuotas="en 6 cuotas";
                    precioFinal *=1.1;
                    opcionValida=true;
                    alert(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/6).toFixed(2)}`);
                    /*console.log(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/6).toFixed(2)}`);*/
                    break;
                case "4":  
                    cantCuotas="en 12 cuotas";
                    precioFinal *=1.15;
                    opcionValida=true;
                    alert(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/12).toFixed(2)}`);
                    /*console.log(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/12).toFixed(2)}`);*/
                    break;
                default:
                    alert("Opción Inválida");
                    /*console.log("Opción Inválida");*/
                    opcionValida=false;
            }
    }while (!opcionValida)    
}


compra=elegirProducto();

if (compra!="6"){
    elegirPlanPago();  
    console.log("El resumen de tu compra es:");
    
    for (let i=0; i<carrito.length; i++){
        console.log( carrito[i].nombre, ": U$S" , carrito[i].precio);
    }  
}else{
    alert("Compra cancelada");
    /*console.log("Compra cancelada");*/
}

