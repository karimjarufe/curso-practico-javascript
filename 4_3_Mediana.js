// Lista vacia
var lista1 = [];

// Declaramos la variable de la posicion de la mitad de la lista
var mitadLista1;

// Inicializamos el valor de inicio de la variable media
var mediana = 0;

//

// Funciones
// ...calculamos la mediana
function calcularLaMediana(lista){
    // Le damos valor a la variable mitadLista1
    mitadLista1 = parseInt(lista.length / 2)
    
    if(esPar(lista.length)){
        const element1 = lista[mitadLista1];
        const element2 = lista[mitadLista1 - 1];
    
        const promedioElemento1y2 = calcularPromedio([element1, element2]);
        mediana = promedioElemento1y2;
    
    }else{
        mediana = lista[mitadLista1];
    }
    return mediana;
}

// ...si un numero es par o impar
function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

// ...calcular promedio
function calcularPromedio(lista){
    const sumaLista = lista.reduce(function(valorAcumuladoInicial = 0, nuevoElementoLista){
        return Number(valorAcumuladoInicial) + Number(nuevoElementoLista);
    });

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//

// Funciones para comunicarce con HTML
// ...agregar valores a la lista
function agregarValores(){
    var input = document.getElementById("inputNumber");
    var value = input.value;

    lista1.push(value);

    // Ordenamos los valores de la lista
    lista1 = lista1.sort(function(a, b){
        return a - b;
    });
    
    // Mustra la lista
    var label = document.getElementById("labelLista");
    label.innerText = "Elementos agregados: " + lista1;
}

// ...
function realizarMediana(){
    var mediana = calcularLaMediana(lista1);

    var label = document.getElementById("labelMediana");
    label.innerText = "La mediana entre los numeros es: " + mediana;
}