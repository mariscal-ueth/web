//arrglo que contiene las respuestas correctas 
let correctas = [2,2,2,3,3,2,2,2,2,2];

//areglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de preguntas y el input elegido de esa pregunta
function respuestas(num_pregunta, seleccionada){
	//guardado la respuesta elegida 
	opcion_elegida[num_pregunta] = seleccionada.value;

	//el siguiente codigo es para poner en color blanco
	//el fondo los inputs para cuando elige otra opcion
	//armo el id para seleccionar el section correspondiente
	id="p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
	labels[3].style.backgrounColor = "white"
	labels[5].style.backgrounColor = "white"
    labels[7].style.backgrounColor = "white"

    //doy el color a label seleccionado
    seleccionada.parentNode.style.backgrounColor = " #cec0fc";
}

//funcion que los arreglos para saber cuantas estuvieran correctas
function corregir(){
	cantidad_correctas = 0;
	for(i=0; i <= correctas.length ; i++){
		if(correctas[i] == opcion_elegida[i]){
			cantidad_correctas++;

		}
	}

	document.getElementById("resultado").innerHTML = cantidad_correctas;
}