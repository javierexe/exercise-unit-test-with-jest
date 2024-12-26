test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 Japan Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(3.5);

    // Si 1 dólar son 146.26 Yenes, entonces 3 dólares debe ser (3 * 146.26)
    const expected = 3 * (156.5/1.07);

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3)).toBe(438.79);
})

test("One Yen should be  pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(3);

    // Si 1 Yen son 0.0055 pounds, entonces 3 Yenes debe ser (3 * 0.87/156.5)
    const expected = 3 * (0.87/156.5);

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3)).toBe(0.0167);
})