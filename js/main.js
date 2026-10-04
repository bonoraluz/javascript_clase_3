// Juego simple de piedra, papel o tijera

const usuario = prompt("Escriba su nombre de usuario");

alert("Hola " + usuario + "!");
alert("Jugaremos una versión muy simple de piedra, papel y tijera");
alert("PC y " + usuario + " cuentan con 2 vidas");
alert("En esta versión, perdés una vida si empatás también. En la consola aparecen las opciones");

let vidasUsuario = 2;
let vidasPC = 2;

const piedra = 1;
const papel = 2;
const tijera = 3;

// La PC sólo puede elegir papel
let eleccionPC = 2;


// FUNCIÓN 1
// Muestra las opciones disponibles

function mostrarOpciones(usuario) {

    console.log(usuario + ", tus opciones son:");
    console.log("piedra = 1");
    console.log("papel = 2");
    console.log("tijera = 3");
}


// FUNCIÓN 2
// Determina quién gana
// Retorna un resultado

function determinarGanador(eleccionUsuario, eleccionPC) {

    if (eleccionUsuario === eleccionPC) {

        return "empate";

    }

    else if (
        (eleccionUsuario === 1 && eleccionPC === 3) ||
        (eleccionUsuario === 2 && eleccionPC === 1) ||
        (eleccionUsuario === 3 && eleccionPC === 2)
    ) {

        return "usuario";

    }

    else {

        return "pc";
    }
}


// FUNCIÓN 3
// Función flecha para mostrar las vidas

const mostrarVidas = (vidasUsuario, vidasPC) => {

    console.log(
        "A la PC le quedan: " + vidasPC +
        " vidas y al usuario le quedan: " + vidasUsuario + " vidas"
    );
};


// FUNCIÓN 4
// Muestra el resultado final

function mostrarResultadoFinal(usuario, vidasUsuario, vidasPC) {

    if (vidasPC > vidasUsuario) {

        alert("Gana PC!");

    }

    else if (vidasPC < vidasUsuario) {

        alert("Gana " + usuario + " !");

    }

    else {

        alert("Ambos perdieron :c");
    }
}


// Comienza el juego

mostrarOpciones(usuario);

while (vidasPC !== 0 && vidasUsuario !== 0) {

    const eleccionUsuario = Number(
        prompt("Escriba aquí su opción")
    );

    const resultado = determinarGanador(
        eleccionUsuario,
        eleccionPC
    );


    if (resultado === "empate") {

        console.log("Empate, ambos pierden");

        vidasPC--;
        vidasUsuario--;

    }

    else if (resultado === "usuario") {

        console.log("Gana usuario " + usuario);
        console.log("PC pierde una vida");

        vidasPC--;

    }

    else {

        console.log("Gana PC");
        console.log(usuario + " pierde una vida");

        vidasUsuario--;
    }


    mostrarVidas(vidasUsuario, vidasPC);
}


// FINAL DEL JUEGO

alert("FIN DEL JUEGO :)");

mostrarResultadoFinal(usuario, vidasUsuario, vidasPC);
