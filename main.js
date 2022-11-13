const form = document.getElementById("transactionForm");

let todasLasTransacciones;
let transactionType = document.getElementById("transactionType")
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
    let transactionObj = convertFormDataToTransactionObj (transactionFormData);
    // si es valido, se guarda
    if (isValidTransactionForm(transactionObj)) {
      saveTransactionObj(transactionObj);
      insertRowInTransactionTable(transactionObj);
      form.reset(); insertRowInTransactionTable
    } else {
      alert ("error") 
      //Mostrar error
    }
  });

function convertFormDataToTransactionObj(transactionFormData) {
    let transactionType = transactionFormData.get("transactionType");
    let transactionDescription = transactionFormData.get("transactionDescription");
    let transactionAmount = transactionFormData.get("transactionAmount");
    let transactionCategory = transactionFormData.get("transactionCategory");
    let transactionId = getNewTransactionId();
    return {
        transactionType: transactionType,
        transactionDescription: transactionDescription,
        transactionAmount: transactionAmount,
        transactionCategory: transactionCategory,
        transactionId: transactionId,
    };
}
  
function isValidTransactionForm(transactionObj) {
    let isValidForm = true;
  /*
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
  };
*/

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

  let newTypeCellRef = newTransactionRowRef.insertCell(0);
  newTypeCellRef.textContent = transactionObj["transactionType"];

  newTypeCellRef = newTransactionRowRef.insertCell(1);
  newTypeCellRef.textContent = transactionObj["transactionDescription"];

  newTypeCellRef = newTransactionRowRef.insertCell(2);
  newTypeCellRef.textContent = transactionObj["transactionAmount"];

  newTypeCellRef = newTransactionRowRef.insertCell(3);
  newTypeCellRef.textContent = transactionObj["transactionCategory"];

  let newDeleteCell = newTransactionRowRef.insertCell(4);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  newDeleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    let transactionRow = event.target.parentNode;
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