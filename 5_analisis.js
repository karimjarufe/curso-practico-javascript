// Funciones helpers

// ...verificamos si el total de salarios son par o impar
function esPar(numero){
    if(numero % 2 === 0){
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

// Funciones

// Calculadora de mediana
function salariosMediana(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitas1 = lista[mitad - 1];
        const personitaMitas2 = lista[mitad];

        const mediana = calcularPromedio([personitaMitas1, personitaMitas2]);
        return mediana; 

    }else{
        const personitaMitas = lista[mitad];
        return personitaMitas;
    }
}

// Lista con los salarios de las personas
const salariosCol = colombia.map(function(element){
    return element.salary;
});

// Ordenamos la lista de salarios
const salariosOrdenados = salariosCol.sort(function(a, b){
    return a - b;
});

const medianaGeneral = salariosMediana(salariosOrdenados);

//

// Mediana del TOP 10%
const spliceStart = (salariosOrdenados.length * 90) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;

const salariosTop10 = salariosOrdenados.splice(spliceStart, spliceCount);

const medianaTop10 = salariosMediana(salariosTop10);

//

// Mostramos en consola
console.log({
    medianaGeneral,
    medianaTop10,
});