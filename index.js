const textAarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".rectangulo");
const a = document.getElementById("a");
const parrafo = document.getElementById("parrafo");





function botonEncriptar(){
  const textoEncriptado = encriptar(textAarea.value);
  mensaje.value = textoEncriptado;
  textAarea.value = "";
}

function encriptar(stringEncriptado){

  let textoCifrado = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

  stringEncriptado = stringEncriptado.toLowerCase();

   for(let i = 0;i<textoCifrado.length;i++){
    if(stringEncriptado.includes(textoCifrado[i][0])) {

      stringEncriptado = stringEncriptado.replaceAll(textoCifrado[i][0], textoCifrado[i][1]);
      a.textContent = "Texto encriptado exitosamente";
      parrafo.textContent = "";
      
    }
    else{
      a.textContent = "";
      parrafo.textContent = "Ingresa el mensaje que desea encriptar o desenciptar.";
    }
   }
   return stringEncriptado
}


function botonDesencriptar(){
  const textoEncriptado = desencriptar(textAarea.value);
  mensaje.value = textoEncriptado;
  textAarea.value = "";
}


function desencriptar(stringDesencriptado){
  
  let textoCifrado = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

  stringDesencriptado = stringDesencriptado.toLowerCase();

   for(let i = 0;i<textoCifrado.length;i++){

    if(stringDesencriptado.includes(textoCifrado[i][1])) {

      stringDesencriptado = stringDesencriptado.replaceAll(textoCifrado[i][1], textoCifrado[i][0]);
    }
   }
   return stringDesencriptado
}

