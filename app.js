let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroDeUsuario').value); 
    if(numeroSecreto === numeroDeUsuario){
        asignarTexto('p', `¡Felicidades! Acertaste en ${intento} ${intento ==1 ? 'vez' : 'veces'}  `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute('disabled', false);        
        
    } else{
        if(numeroDeUsuario < numeroSecreto){
            asignarTexto('p', 'El número es mayor');
        } else{
            asignarTexto('p', 'El número es menor');
        }
        intento++;
        limpiarCaja();
        if(intento > 3){
            asignarTexto('p', 'Lo siento, superaste el limite de intentos. ')
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('iniciar').setAttribute('disabled', false);
        }      
    }
    
}

function limpiarCaja(){
    let limpiarValor = document.querySelector('#numeroDeUsuario').value='';
}

function asignarTexto(selector, texto){
    let mySelectors = document.querySelector(selector);
    mySelectors.innerHTML = texto;
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor((Math.random()*numeroMax))+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == 3){
        asignarTexto('p', 'Ya se sortearon todos los números posibles');  

    }else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return(numeroGenerado);
        }
    }
}

function condicionesIniciales(){
    asignarTexto('p',`Ingrese su número del 1 al ${numeroMax}`);
    asignarTexto('h1', 'Juego del número secreto');
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intento = 1;
}

function reiniciarJuego(){
    //Limpiar caja.
    limpiarCaja();
    //indicar mensajes de incio del juego
    //Generar el número aleatorio
    //Inicializar numero de intentos
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.querySelector('#iniciar').removeAttribute('disabled');   
}

condicionesIniciales();