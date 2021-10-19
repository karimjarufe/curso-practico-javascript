// Lista de numeros
// const lista1 = [2, 3, 4, 4, 5, 4, 3, 4, 6];
const lista1 = [];

// Creamos objeto
const lista1Count = {};

// Agregar elementos a el objeto lista1Count
// lista1.map(function(elemento){
//     if (lista1Count[elemento]){
//         lista1Count[elemento] += 1;
//     }else{
//         lista1Count[elemento] = 1;
//     }
// });

// Volvemos a crear un array con el objeto
// Object.entries -> retorna, la llave y valor de un objeto, como array
// Esto retorn -1 0 1, donde le dice al elemento que retroceda, se quede o avance.
// const lista1Array = Object.entries(lista1Count).sort(function(elementoA, elementoB){
//     return elementoA[1] - elementoB[1];
// });
var lista1Array = [];

// const moda = lista1Array[lista1Array.length - 1];
var moda = "";

// ------------------------------------------------------

// Metodos de calculos
// ...generamos un diccionario con key and value de la lista de numeros
function generarObjeto(){
    lista1.map(function(element){
        if(lista1Count[element]){
            lista1Count[element] += 1;
        }else{
            lista1Count[element] = 1;
        }
    });
}

// ...agregamos los elementos del diccionario a un array
function arrayElementosAndValor(){
    lista1Array = Object.entries(lista1Count).sort(function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    });
}

// ...moda
function mostrarModa(){
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}

// ------------------------------------------------------

// Metodos de contacto
//...agregar numeros lista
function agregarNumeroLista(){
    var input = document.getElementById("input");
    var value = input.value;

    lista1.push(value);
} 

// ...mostrar moda numeros
function mostrarModaNumeros(){
    generarObjeto();
    arrayElementosAndValor();
    moda = mostrarModa();

    var labelModa = document.getElementById("labelModa");
    labelModa.innerText = "El numero " + moda[0] + " se repite: " + moda[1];
}