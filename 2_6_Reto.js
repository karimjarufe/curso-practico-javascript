/*
En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

            -La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
            -La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
            -La función debe retornar la altura del triángulo.
        
        Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

// Desarrollor...

// Verificamos si al menos dos lados son iguales
function esIsosceles(l1, l2){
    if(l1 != l2){
        alert("Los lados del triangulo deben ser iguales!");
        return false;
    }
    return true;
}

// Calculamos la altura
function alturaTriangulo(l1, l2, b){
    if(esIsosceles(l1, l2) == true){
        var altura = Math.sqrt(l1**2 - b**2 / 4);
        return altura;
    }
}

//

// Metodos para comunicarse con HTML
function mostrarAlturaTriangulo(){
    var input = document.getElementById("inputL1");
    const l1 = input.value;
    input = document.getElementById("inputL2");
    const l2 = input.value;
    input = document.getElementById("inputBase");
    const b = input.value;

    const altura = alturaTriangulo(l1, l2, b);
    if(altura != undefined){
        alert(altura);
    }
}
