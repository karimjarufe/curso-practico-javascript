// Código del cuadrado
// Lados
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// Perimetro del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

// Area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd("");

//

// Código del triangulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " + ladoTriangulo2 
//     + "cm y " 
//     + baseTriangulo 
//     + "cm \n" 
//     + "La altura del triangulo mide: " + alturaTriangulo + "cm"
// );

// Perimetro del triangulo
function perimetroTriangulo(l1, l2, base){
    return l1 + l2 + base;
}

// Area del triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd("");

//

// Código del circulo
console.group("Circulo");
// 
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;
// console.log(
//     "Radio: " + radioCirculo 
//     + "cm, " 
//     + "Diametro: " + diametroCirculo 
//     + "cm" 
// );

// Perimetro del circulo
function perimetroCirculo(radio){
    const diametro = radio * 2;
    return diametro * Math.PI;
}

// Area del circulo
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd("");





// Funciones para interactuar con el HTML
// Cuadrado
// Area
function calcularAreaCuadrado(){
    var input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Perimetro
function calcularPerimetroCuadrado(){
    var input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

//

// Triangulo
// Area
function calcularAreaTriangulo(){
    var input = document.getElementById("inputAltura");
    const altura = input.value;
    input = document.getElementById("inputBase");
    const base = input.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

// Perimetro
function calcularPerimetroTriangulo(){
    var input = document.getElementById("inputLado1");
    const l1 = Number(input.value);
    input = document.getElementById("inputLado2");
    const l2 = Number(input.value);
    input = document.getElementById("inputBase");
    const base = Number(input.value);

    const perimetro = perimetroTriangulo(l1, l2, base);
    alert(perimetro);
}

//

// Circulo
// Perimetro
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

// Area
function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);

}