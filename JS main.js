// Incializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let remporizador = false;
let timer = 30;
let tiempoRegresivoID = null;

//Apuntando a documentos HTML
let mostrandoMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById(" t-restante");

// Generacion de numeros aletorios 
let numeros = [ 1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sorf(()=>{return Math.random()-0.5});
console.log(numeros);

//Funciones
function contarTiempo(){
	tiempoRegresivoId = setInterval(()=>{ 
	timer--;
	    mostrarTiempo.innerHTML = ´Tiempo: ${timer}segundos´;
		if(timer== 0){ 
			clearInterval(tiempoRegresivoID);
			bloquearTargetas();
		}
	},1000);
}

function bloquearTarjetas(){
	for(let i = 0; i<=15; i¨ ++){
		let tarjetaBloqueada = document.getElementById(i);
		tarjetaBloqueada.innerHTML = numeros[i];
		tarjetaBloqueada.desabled = true;
	}
}

//Funcion principal
function destapar(id){

    if(temporizador == false){ 
	contarTiempo();
	temporizador = true;
}

	targetasDestapadas++;
	console.log(tarjetasDestapadas);

	if(tarjetasDestapadas == 1){ 
		//Mostrar primer numero
		targeta1 = document.getElementById(id);
		primerResultado = numeros[id]
		targeta1.innertHTML = primerosResultado;

 //Deshabilitar primer boton
 targeta1.desabled = true;

}else if(tarjetasDestapadas == 2){
 //Mostrar segundo numero
  targeta2 = document.getElementById(id)
  segundoResultado = numeros[id];
  targetas2.innerHTML = segundoResultado;
    //Deshabilitar segundo boton
    targeta2.disabled=true;

    //Incrementar movimientos
    movimientos++,;
    mostrandoMovimientos.innerHTML = "movimientos:${movimientos}";

    if(primerResultado == segundoResultado){
    //Encerar contador targetas destapadas
    targetasDestapadas = 0;

    //Aumentar aciertos
    aciertos++;
    mostrarAciertos.innerHTML=´Aciertos: ${}´;

    if(aciertos== 8){
    mostrarAciertos.innerHTML=" Aciertos: $(aciertos)"
    mostrandoMovimientos="Movimientos: ${movimientos}"
    }

}else{
 
 // Mostrarmomentaneamet valores y volver a tapar
     			setTimeout(()=>{
     				targeta1.innertHTML = ´´ ;
     				targeta2.innertHTML = ´´ ;
     				targeta1.desabled = false ;
     				targeta2.desabled = false ;
     				targetasDestapadas = 0 ;
     			},2000);
     		}
    }
}