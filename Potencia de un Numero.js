"use strict";

var forma = document.getElementById("forma");
    

function operacion(){
    var potencia = forma["potencia"].value,
        resultado = [],
        i=0;

        for (var i = 0; i < 11; i++) 
        {
            var c = parseInt(potencia) ** i;
            resultado  += potencia + " a la " + i + " = " + c + "\n";
        }

    document.getElementById("resultado").value = resultado;
    
    
    
}


/* 
var FMT_OPERADOR1 = "0,0",
    FMT_OPERADOR2 = "0,0",
    FMT_SUMA = "$0,0.00",
    FMT_RESTA = "$0,0.00",
    FMT_MULTIPLICACION = "$0,0.00",
    FMT_DIVISION = "$0,0.00",
    forma = document.getElementById("forma"),
    salidaOperador1 = document.getElementById("salidaOperador1"),
    salidaOperador2 = document.getElementById("salidaOperador2"),
    salidaSuma = document.getElementById("salidaSuma"),
    salidaResta = document.getElementById("salidaResta"),
    salidaDivision = document.getElementById("salidaDivision"),
    salidaMultiplicacion = document.getElementById("salidaMultiplicacion");

function operacion(){
  var operador1 = numeral().unformat(forma["operador1"].value),
      operador2 = numeral().unformat(forma["operador2"].value),
      error = false;
   if (isNaN(operador1)){
     error = true;
     salidaOperador1.value = "Numero Incorrecto";
   }  
   if (isNaN(operador2)){
     error = true;
     salidaOperador2.value = "Número Incorrecto";
   }
   if (!error){
     var numeroEnTexto = numeral(operador1).format(FMT_OPERADOR1),
     numeroEnTexto2 = numeral(operador2).format(FMT_OPERADOR2),
     suma = operador1 + operador2,
     resta =  operador1 - operador2,
     multiplicacion = new BigNumber(operador1).times(new BigNumber(operador2)),
     division = operador1 / operador2;
     forma["operador1"].value = numeroEnTexto;
     forma["operador2"].value = numeroEnTexto2;
     salidaOperador1.value = numeral(operador1).format(FMT_OPERADOR1);
     salidaOperador2.value = numeral(operador2).format(FMT_OPERADOR2);
     salidaSuma.value = "SUMA: " + numeral(suma).format(FMT_SUMA);
     salidaResta.value = "RESTA: " + numeral(resta).format(FMT_RESTA);
     salidaMultiplicacion.value = "MULTIPLICACION: " + numeral(multiplicacion).format(FMT_MULTIPLICACION);
     salidaDivision.value = "DIVISION: " + numeral(division).format(FMT_DIVISION);
     
   }
}
*/
