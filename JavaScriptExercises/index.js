/******************************************************************************************* *
 *  *******Declaración de unA FUNCIÓN**********
Se utiliza la palabra reservada function seguida de un nombre
Se agregan paréntesis donde se colocan los argumentos
Y se agregan llaves. Lo que esté dentro de las llaves es el cuerpo de la función*/

function sumar(){
    console.log("Suma con Declaración de la función");
    console.log(10 + 60);
}

//Mandar a llamar la función con el nombre y paréntesis
sumar()

/******************************************************************************************* */
/* *******Expresión de la función********** 
Se inicializa como si fuera una variable
Y también se manda a llamar*/
const sumar2 = function(){
    console.log("Suma con Expreción de la función");
    console.log(12 + 43);
}
sumar2()

/* *****************************************************************************************
*********Suma de los elementos de un arreglo*********** */
const wholeNumbers = [5,4,5,32,13,46,75,76,42,22];

//Con arrow function
let total = wholeNumbers.reduce((x, y) => x + y, 0); 

//Con function normal
/*let total = wholeNumbers.reduce(function(x, y){
    return x + y
} , 0);*/
console.log("Suma de los elementos de un arreglo");
console.log(total);