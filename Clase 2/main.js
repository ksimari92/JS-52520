//comentario lineal 

/* comentarios
en varias lineas
*/

// estructura IF
let booleano = false; 

if (booleano) {
    //codigo que quiero que se ejecute
    alert("Se muestra mi mensaje")
}


// let numero = 5;

// if (numero == 5) {
//     alert("Ejecutar este mensaje");
// }

// if (numero != 6) {
//     alert("No vas a ver este mensaje");
// }

// let persona = 18;

// if (persona >= 18) {
//     alert("puede comprar alcohol");
// }

//IF ... ELSE

// let usuario = prompt("Ingrese su nombre de usuario");

// if(usuario == "") {
//     alert("No ingreso nombre de usuario")
// } else {
//     alert("El nombre ingresado es: " + usuario)
// }

//condiciones encadenadas
let descuento = 14;

// if (descuento == 10){
//     alert("Tenes 10%")
// } else if (descuento >= 15){
//     alert("Tenes un 15% ")
// } else {
//     alert("No tenes descuento")
// }

//Condicion compuesta

// let user = prompt("Ingresa tu usuario"); 
// let pass = prompt("Ingresa tu contraseña");

// if (user && pass) {
//     alert("Bienvenido a la pagina!")
// }

// if (user != "" && pass != ""){
//     alert("Bienvenido a la pagina!")
// } else {
//     alert("Te falta algun dato")
// }

//-------------------------------------

// let nombre = prompt("deci tu nombre")
// let edad =  prompt("edad")

// if (nombre == "Maria" || edad == 18) {
//     alert("Bienvenida")
// } else {
//     alert("No sos Maria, ni tenes 18 años")
// }

//-----CICLOS

// let numeroIngresado = parseInt(prompt("Ingrese un numero..."));

// for (let i = 1 ; i <= 100; i++){
//     let resultado = numeroIngresado * i;

//     console.log("numero ingresado  x " + i +  " = " + resultado)
// }


// for (let i = 10; i >= 1 ; i-- ) {
//     console.log("La bomba explota en " + i);

//     if(i == 1) {
//         console.log("Boooom")
//     }
// }

//----- WHILE 

// let entrada = prompt("Ingrese un nomnbre");

// while (entrada != "ESC") {
//     alert("El usuario dijo: " + entrada);

//     entrada = prompt("Ingrese un dato o ESC para salir");
// }

//----- switch

// while(entrada != "ESC") {
//     switch (entrada){
//         case "ANA":
//             alert("Hola Ana");
//             break;
//         case "JUAN":
//             alert("Hola Juan");
//             break;
//         default:
//             alert("No sos ni Juan ni Ana");
//             break;
//     } 

//     entrada = prompt("Ingrese un nomnbre");
// }


// let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));

// let texto = prompt('INGRESE TEXTO A REPETIR');

// for (let index = 0; index < cantidad; index++) {
// console.log(texto);
// }


// let lados = prompt('INGRESE CANTIDAD DE LADOS');

// for (let index = 0; index < lados; index++) {

//     if (index > 3) {
//     alert(lados);
// }

// if (index == lados-1){
//     alert("creaste un objeto de"+ ' '+ lados + ' ' +'lados');
// }
// }


// let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));

// for (let index = 0; index < lados; index++) {
//   alert("lado " + index);
// }


let numero = prompt("Ingrese un numero ");

// if(numero%2 == 0) {
//     alert("El numero es par")
// } else {
//     alert("El numero es impar")
// }

//--------------------------------------

let pares = 0;
let impares = 0;

while(numero != "salir"){
    if (numero%2 == 0) {
        pares++;
    } else {
        impares++;
    }

    numero = prompt("Ingrese un numero ");
}

console.log("numero pares: " + pares + "numeros impares: " + impares)