document.addEventListener("DOMContentLoaded",function(){
  const valor = document.getElementById("valor");
  const button = document.getElementById("enviar");

  //24/10/2022 14:00
  let gicoVal = 708.66699737, euroVal = 34.40, dolarVal = 1, arsValOf = 162.17, arsBlueVal = 293;
  
  /*
  Tengo que arreglar el problema que tiene con el cors
  
  const API_URL = "https://api.estadisticasbcra.com";
  
  fetch(`${API_URL}/usd_of`,{
    headers: {
    Authorization: 
      "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTgxNzIwODYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJuYWNob3RkZjEyM0BnbWFpbC5jb20ifQ.dWzHHPmmQWLdG9zXAzXSbgYMCC353Va246AJinNbx1wdSfQNPspPfyGOKTpr8nyfbMAquF4QUlc7JsIr0Byt0A",
    },
  })
  .then((response) => response.json())
  .then((data) => {
    const l = data.length;
    let aux = data.map((val) => `${val.v}`); arsValOf = aux[l-1];
  });
  */
  
  button.onclick = function(){
    //saldo en diferentes monedas
    let gico = valor.value * gicoVal;
    let euro = gico * euroVal;
    let dolar = euro * dolarVal;
    let arsOf = dolar * arsValOf;
    let arsBlue = dolar * arsBlueVal;

    document.getElementById("grdao").innerHTML = "Grdao (saldo actual): = "+valor.value;
    document.getElementById("gico").innerHTML = "Grdao a Gico (valor actual = "+ gicoVal +") = " + gico;
    document.getElementById("euro").innerHTML = "Gico a Euro (valor actual = "+ euroVal +") = " + euro;
    document.getElementById("dolar").innerHTML = "Euro a Dolar (valor actual = "+ dolarVal +") = " + dolar;
    document.getElementById("dolarOf").innerHTML = "Dolar Oficial (valor actual = "+ arsValOf +") a peso argentino = " + arsOf;
    document.getElementById("dolarBlue").innerHTML = "Dolar Blue (valor actual = "+ arsBlueVal +") a peso argentino = " + arsBlue;
  };
});
