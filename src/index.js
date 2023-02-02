import validator from './validator.js';

//AddEventListener para el botón
const Validacion = document.getElementById("BtnValidar");
Validacion.addEventListener("click", validate)

//Función para los mensajes de Tarjeta Valida, Tarjeta Invalida
function validate() {
  const cardNumber = document.getElementById("cardnumber").value
  
  console.log(cardNumber)  
  //If/Else statments para llenar formulario, saber si la tarjeta es valida    
  if (cardNumber ===""){
    alert("Ingresa tu numero de tarjeta")
    return
  }
  
  //Llamando al método en el contexto del objeto
  const valid = validator.isValid(cardNumber)
  if(valid===true) {
    document.getElementById('result').innerHTML=(
      `Numero de Tarjeta ${validator.maskify(cardNumber)} Valido. Puede continuar su compra`);
  }
  else {document.getElementById('result').innerHTML=(
    `Numero de Tarjeta ${validator.maskify(cardNumber)} no existe. Favor de Verificar`);
  }
}
console.log(validator);

