/*
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

transacciones.forEach((transac) => console.log(transac.montoTransaccion));

const encontrado = transacciones.find((transac) =>  transac.categoriaTransaccion =="Ropa")
console.log (encontrado);
*/



const form = document.getElementById("transactionForm");

let todasLasTransacciones;

let campoDescripcion = document.getElementById ("transactionDescription");
let campoMonto = document.getElementById ("transactionAmount");
let campoCategoria = document.getElementById("transactionCategory");

form.addEventListener("submit", validarFormulario);

function validarFormulario(ev){
   // if ((campoDescripcion.value=="")||(campoMonto.value=="")||(campoCategoria.value==""));
   // alert ("ingrese datos validos");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let transactionObj = convertFormDataToTransactionObj(transactionFormData);
    // si es valido, se guarda
    if (isValidTransactionForm(transactionObj)) {
      saveTransactionObj(transactionObj);
      insertRowInTransactionTable(transactionObj);
      form.reset();  insertRowInTransactionTabl
    } else {
      alert ("error") 
      //Mostrar error
    }
  });
  
function isValidTransactionForm(transactionObj) {
    let isValidForm = true;
  
    if (!transactionObj["transactionDescription"]) {
      alert("Te olvidaste de la descripción");
      isValidForm = false;
    }
  
    if (!transactionObj["transactionAmount"]) {
      alert("Te olvidaste de poner un monto");
      isValidForm = false;
    } 
  
    else if (transactionObj["transactionAmount"] < 0) {
      alert("No admite numeros negativos");
      isValidForm = false;
    }
    if (!transactionObj["transactionCategory"]) {
      alert("Debes seleccionar una categoria");
      isValidForm = false;
    }
    return isValidForm;
  
function convertFormDataToTransactionObj(transactionFormData) {
    let transactionDescription = transactionFormData.get(
            "transactionDescription");
    let transactionAmount = transactionFormData.get("transactionAmount");
    let transactionCategory = transactionFormData.get("transactionCategory");
    let transactionId = getNewTransactionId();
    return {
        transactionDescription: transactionDescription,
        transactionAmount: transactionAmount,
        transactionCategory: transactionCategory,
        transactionId: transactionId,
    };
}
    
// Categorias

function category() {
  let allCategories = [
    "Vivienda",
    "Salario",
    "Mercado",
    "Ropa",
    "Salidas",
    "Otros",
  ];
  for (let index = 0; index < allCategories.length; index++) {
    insertCategory(allCategories[index]);
  }
}

function insertCategory(categoryName) {
  const selectElement = document.getElementById("transactionCategory");
  let htmlToInsert = `<option> ${categoryName} </option>`;
  selectElement.insertAdjacentHTML("beforeend", htmlToInsert);
}

function mostrarEnPantallaArrayDeTransaccion(transactionObjArr) {
  transactionObjArr.forEach(function (arrayElement) {
    insertRowInTransactionTable(arrayElement);
  });
}

function getNewTransactionId() {
  let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
  let newTransactionId = JSON.parse(lastTransactionId) + 1;
  localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId));
  return newTransactionId;
}

//Tabla
function insertRowInTransactionTable(transactionObj) {
  let transactionTableRef = document.getElementById("transactionTable");

  let newTransactionRowRef = transactionTableRef.insertRow(-1);
  newTransactionRowRef.setAttribute(
    "data-transaction-id",
    transactionObj["transactionId"]
  );

  newTypeCellRef = newTransactionRowRef.insertCell(0);
  newTypeCellRef.textContent = transactionObj["transactionDescription"];

  newTypeCellRef = newTransactionRowRef.insertCell(1);
  newTypeCellRef.textContent = transactionObj["transactionAmount"];

  newTypeCellRef = newTransactionRowRef.insertCell(2);
  newTypeCellRef.textContent = transactionObj["transactionCategory"];

  let newDeleteCell = newTransactionRowRef.insertCell(3);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  newDeleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    let transactionRow = event.target.parentNode.parentNode;
    let transactionId = transactionRow.getAttribute("data-transaction-id");
    transactionRow.remove();
    deleteTransactionObj(transactionId);
  });
}

function deleteTransactionObj(transactionId) {
  let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));

  let transactionIndexInArray = transactionObjArr.findIndex(
    (element) => element.transactionId == transactionId
  );
  //Elimino el elemento de esa poscicion
  transactionObjArr.splice(transactionIndexInArray, 1);
  let transactionArrayJSON = JSON.stringify(transactionObjArr);
  localStorage.setItem("transactionData", transactionArrayJSON);
}

function saveTransactionObj(transactionObj) {
  let myTransactionArray =
    JSON.parse(localStorage.getItem("transactionData")) || [];
  myTransactionArray.push(transactionObj);
  //Convierto  mi array de transaccion a json
  let transactionArrayJSON = JSON.stringify(myTransactionArray);
  //Guardo mi array de transaccion en formato JSON en el local storage
  localStorage.setItem("transactionData", transactionArrayJSON);
}}

