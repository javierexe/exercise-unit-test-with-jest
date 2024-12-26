let oneEuroIs = {
    'JPY': 156.5,
    'USD': 1.07,
    'GBP':0.87
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = 3 * (oneEuroIs.JPY / oneEuroIs.USD);
    return parseFloat(valueInYen.toFixed(2));  
}


const fromYenToPound = function(valueInYen) {
    let valueInPound = 3 * (oneEuroIs.GBP/oneEuroIs.JPY);
    return parseFloat(valueInPound.toFixed(4));  
}


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }