/*simulador que permite calcular el total de gastos en un area específica
alert("Calculadora de gastos")

const usuarioAutorizado = "Walter";
const contraseniaAutorizada = "4001";

let usuario= prompt ("Ingresa tu usuario");
let contrasenia = prompt("Ingresa tu contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert ("Hola, bienvenido " + usuario);
    let cantidadGastos = parseInt(prompt("Ingresa la cantidad de gastos a calcular"));

    for(let i = 0; i <cantidadGastos; i++) {
        let tipoGastos = (prompt("Ingresá el tipo de gasto"));
        let gasto1 = parseInt(prompt("Ingresá el monto del gasto1:"));
        let gasto2 = parseInt(prompt("Ingresá el monto del gasto2:")); 
        let gasto3 = parseInt(prompt("Ingresá el monto del gasto2:")); 
        let totalGastos = calcularTotal(gasto1, gasto2, gasto3);
        alert("El total de " + tipoGastos + " es " + totalGastos);

        let mucho = gastoMucho (totalGastos);
        if(mucho) {
            alert(tipoGastos + ": Estás gastando mucho en esto");
        }
        else {
            alert(tipoGastos + ": Todavía podes seguir gastando");
        }
    }
}
else{ 
    alert("Usuario o Contraseña incorrecta");
    }

//Funciones

function calcularTotal (gasto1, gasto2, gasto3) {
    let totalGastos = gasto1 + gasto2 + gasto3;
    return totalGastos;
}

function gastoMucho(totalGastos){
    if (totalGastos >= 5000) {
        return true;
    }
    else {
        return false;
    }
}


/*
for(let i=1; 1<=3; 1++){
    let usuario= prompt("Ingresa tu usuario");
    let contrasenia=prompt("Ingresa tu contraseña para " +usuario);
    if((usuario=="Walter")&&(contrasenia=="1234")){
        console.log("Bienvenido!!!!!");
        break;
    }else{
        console.log("Usuario denegado, te quedan " +(3-i)+ " intentos");
    }
}
*/
let tipoIngreso =  prompt ("Ingresa el tipo de ingreso de tu presupuesto");
console.log ("Ingresa " + tipoIngreso);

let presupuesto = parseInt(prompt("Ingresa el monto de tu presupuesto total"));
console.log ("monto: $" + presupuesto);

let acumulador = presupuesto;
for (let i=1; i<=4;i++){

    let descripcionGastos =  prompt ("Ingresa descripción de la transacción");
    console.log ("descripcion: " + descripcionGastos);

    let montoGastos = parseInt(prompt("Ingresa el monto de la transacción"));
    console.log ("monto: $" + montoGastos); 

    let categoriaGastos = prompt("Ingresa la categoría de tu gasto");
    console.log ("La categoría es " + categoriaGastos);
    acumulador = acumulador - montoGastos;
    console.log("Todavia tenes para gastar: " + acumulador);
}


/*funciones
function calcularGastos (presupuestoTotal, montoGasto){
    let gastos=presupuesto - montoGastos;
    console.log("Todavía tenes para gastar $" + gastos);
}

}
function calcularTotal (totalGastos, masGastos){
    let resta = gastos - montoGastos;
    console.log("Todavía tenes para gastar $" + resta);
}
calcularGastos ()*/

//Objetos

function Transaccion (categoria, gasto, descripcion) {
        this.categoria = categoriaGastos;
        this.gasto = montoGastos;
        this.descripcion = descripcionGastos;
    }

const transaccion1 = new Transaccion(categoriaGastos, montoGastos, descripcionGastos);

console.log(transaccion1)

function Ingreso (tipo, monto) {
    this.Ingreso = tipoIngreso;
    this.monto = presupuesto;
}
const ingreso1 = new Ingreso(tipoIngreso, presupuesto);

console.log(ingreso1)

// array de objetos


const transacciones = [
    {
        tipoTransaccion: "Egreso",
        descripcionTransaccion: descripcionGastos,
        montoTransaccion: montoGastos,
        categoriaTransaccion: categoriaGastos,
        Id: 1,
      },
    {
        tipoTransaccion: "Ingreso",
        descripcionTransaccion: "cobre el sueldo",
        montoTransaccion: "200000",
        categoriaTransaccion: "otro",
        Id: 10,
      },
      {
        tipoTransaccion: "Egreso",
        descripcionTransaccion: "compre una gorra",
        montoTransaccion: "3500",
        categoriaTransaccion: "Ropa",
        Id: 11,
      },
      {
        tipoTransaccion: "Egreso",
        descripcionTransaccion: "supermercado",
        montoTransaccion: "20000",
        categoriaTransaccion: "Mercado",
        Id: 21,
      },
      {
        tipoTransaccion: "Egreso",
        descripcionTransaccion: "sali a comer hamburguesas",
        montoTransaccion: "5600",
        categoriaTransaccion: "Salida",
        Id: 41,
      },
];

console.log(transacciones[0])

//************************** */

transacciones.forEach((transac) => console.log(transac.montoTransaccion));

const encontrado = transacciones.find((transac) =>  transac.categoriaTransaccion =="Ropa")
console.log (encontrado);

