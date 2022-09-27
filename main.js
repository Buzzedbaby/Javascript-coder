/*simulador que permite calcular el total de gastos en un area específica*/
alert("Calculadora de gastos")

const usuarioAutorizado = "Walter";
const contraseniaAutorizada = "4001";

let usuario= prompt (" Ingresa tu usuario");
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
