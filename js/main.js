let producto;
let nombreProducto;
let cantCuotas;
let seguirComprando=true;
let precio=0;
let precioFinal=precio;
let planPago;
let productoValido=true;
let opcionValida=true;
let seguirComprandoString;

function elegirProducto(){
    do{
        producto = prompt(`Selecciona un producto: 
            1. Iphone 15 Pro  
            2. Iphone 15
            3. Iphone 14
            4. Smartwatch
            5. Samsung Galaxy S24
            6. Cancelar compra`);
            switch(producto) {
                    case "1":
                        nombreProducto="Iphone 15 Pro";
                        precio=1200;
                        precioFinal +=precio;
                        productoValido=true;
                        console.log(`Agregaste ${nombreProducto} al carrito. Precio U$S ${precio}`)
                        break;
                    case "2":
                        nombreProducto="Iphone 15";
                        precio=1000;
                        precioFinal +=precio;
                        productoValido=true;
                        console.log(`Agregaste ${nombreProducto} al carrito. Precio U$S ${precio}`)
                        break;
                    case "3":
                        nombreProducto="Iphone 14";
                        precio=800;
                        precioFinal +=precio;
                        productoValido=true;
                        console.log(`Agregaste ${nombreProducto} al carrito. Precio U$S ${precio}`)
                        break;
                    case "4":
                        nombreProducto="Smartwatch";
                        precio=200;
                        precioFinal +=precio;
                        productoValido=true;
                        console.log(`Agregaste ${nombreProducto} al carrito. Precio U$S ${precio}`)
                        break;
                    case "5":
                        nombreProducto="Samsung Galaxy S24";
                        precio=1100;
                        precioFinal +=precio;
                        productoValido=true;
                        console.log(`Agregaste ${nombreProducto} al carrito. Precio U$S ${precio}`)
                        break;
                    case "6":
                        seguirComprando=false;
                        productoValido=false;
                        break;
                    default:
                        console.log("Producto Inválido");
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
                                console.log("Opción Inválida");
                                opcionValida=false;
                    }
                }
            }while (!opcionValida);
    }while (seguirComprando);
    return producto;
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
                    console.log(`Elegiste pagar ${cantCuotas}. Precio final U$S ${precioFinal}`);
                    break;
                case "2": 
                    cantCuotas="en 3 cuotas";
                    precioFinal *=1.05;
                    opcionValida=true;
                    console.log(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/3).toFixed(2)}`);
                    break;
                case "3": 
                    cantCuotas="en 6 cuotas";
                    precioFinal *=1.1;
                    opcionValida=true;
                    console.log(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/6).toFixed(2)}`);
                    break;
                case "4":  
                    cantCuotas="en 12 cuotas";
                    precioFinal *=1.15;
                    opcionValida=true;
                    console.log(`Precio final U$S ${precioFinal.toFixed(2)} ${cantCuotas} de U$S ${(precioFinal/12).toFixed(2)}`);
                    break;
                default:
                    console.log("Opción Inválida");
                    opcionValida=false;
            }
    }while (!opcionValida)    
}

compra=elegirProducto();

if (compra!="6"){
    elegirPlanPago();
}else{
    console.log("Compra cancelada")
}
