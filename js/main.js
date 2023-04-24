// /*                  Simulador interactivo
//     Heladeria Savory

//     *)Interacción del cliente y el establecimiento en cuanto a la compra de mercaderia y productos.

//     *)Rango de delivery

//     *)Realizar pedido

//     *)Costo total

//     *)Preguntas frecuentes o habituales

//     *)Enviar lista de precios ( Productos habituales: Kilo, medio y cuarto)

// */

// const kilo = "$2200"
// const medioKilo = "$1200"
// const cuartoKilo = "$700"
// const cucuruchoExtra = "$30"
// const horarios = "Lunes a viernes de 9hs a 12:30hs\nSadabos y domingos de 11hs hasta las 01:00hs\nEl sector de Juegos ingreso a partir de las 15hs todos los dias"
// const listaDePrecios = "$2200 el kilo, $1200 el medio, $700 el cuarto"
// const rangoDelivery = "Unicamente zona sur, sin costo de envio"
// const mediosDePago = "Debito, Credito y efectivo. No aceptamos MERCADOPAGO"
// const sabores = "Chocolate\nDulce de leche\nVainilla\nAmericana\nFrutilla a la crema\nLimon"
// //Precios
// const preciokilo = 2200;
// const precioMedioKilo = 1200;
// const precioCuartoKilo = 700;

// function saludar(){
//     alert("Bienvenido a Savory :)")
// }

// saludar()

// /*let alertaBienvenida = alert ("Bienvenido a Savory!  :)")*/

// let opcion = prompt ("Presione:\n1) Lista de precios\n2) Rango delivery\n3) Medios de pago\n4) Lista de sabores\n5) Horarios\n6) Ver todas las opciones");

// const seleccion = [listaDePrecios,rangoDelivery,mediosDePago,sabores,horarios];

// if (opcion == 1) {
//     alert (seleccion[0]);
// }else if(opcion == 2){
//     alert (seleccion[1]);
// }else if(opcion == 3){
//     alert (seleccion[2]); 
// }else if(opcion == 4){
//     alert(seleccion[3]);
// }else if(opcion == 5){
//     alert(seleccion[4])
// }else if(opcion == 6){
// alert(seleccion.join("\n"));
// }else{
//     alert("Ups!\nPor aquí no hay nada!\n:(")
// }



// let nombreUsuario = prompt ("Ingrese su nombre..");
// let pregunta = prompt ("Desea realizar un pedido? Presione 0 y elija la opción que desee..\nDe lo contrario presione cualquier tecla para salir!");
// ///
// if (pregunta == 0) {
//     alert("Genial... Prosigamos");
// }else{
//     alert("Hasta luego! :(");
// }
// ///
// let realizarPedido = prompt("Usted desea comprar... \n1)Un kilo\n2)Un medio\n3)Un cuarto");

// if (realizarPedido == 1) {
//     alert(nombreUsuario + " Debes pagar " + precioKilo + " pesos");
// }else if(realizarPedido == 2) {
//     alert(nombreUsuario + " Debes pagar " + precioMedioKilo + " pesos");
// }else if(realizarPedido == 3) {
//     alert(nombreUsuario + " Debes pagar " + precioCuartoKilo + " pesos");
// }else{
//     alert("Hasta luego! :(");
// }





