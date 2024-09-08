// Variables con let
let nombre = "Felipe";
let edad = 19;
let ciudad = "Medellín";
let Estudiante = true;
let saldocivica = 23.000;

// Variables con const
const pi = 3.1416;
const colorFavorito = "Verde";
const empresa = "MetroMedellin";
const añoActual = 2024;
const velocidadLuz = 299792458;

// Funciones tipo flecha con cero parámetros
const saludar = () => console.log("Hola, bienvenido!");
const saludarConValidacion = () => {
    if (nombre) {
        console.log(`Hola ${nombre}, bienvenido!`);
    } else {
        console.log("Hola, bienvenido!");
    }
};

// Función flecha con cero parámetros que realiza una sola acción
const obtenerFechaActual = () => new Date().toLocaleDateString();

// Funciones tipo flecha con un parámetro
const multiplicarPorDos = (num) => num * 2;
const multiplicarPorDosConValidacion = (num) => {
    if (typeof num === "number") {
        return num * 2;
    } else {
        return "El parámetro debe ser un número.";
    }
};

// Funciones tipo flecha con dos parámetros o más
const sumar = (a, b) => a + b;
const sumarConValidacion = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return "Ambos parámetros deben ser números.";
    }
};

// Función flecha con dos o más parámetros que realiza una sola acción
const dividir = (a, b) => a / b;

// Función flecha con dos o más parámetros usando switch
const calcularOperaciones = (a, b, operacion) => {
    switch (operacion) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return b !== 0 ? a / b : "No se puede dividir por 0";
        default:
            return "Operación no reconocida";
    }
};

