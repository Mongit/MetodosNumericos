"use strict";
const m = require("./../significativos.js");

exports.regla1Test = function(test)
{
    test.expect(9);
    
    test.equal(m.contar("3.141592"), 7, "regla 1 todos son numeros");
    test.equal(m.contar("5.694"), 4, "regla 1 todos son numeros");
    
    test.equal(m.contar("5024"), 4, "regla 2 ceros en medio");
    
    test.equal(m.contar("0.03"), 1, "regla 3 ceros izq no cuentan");
    test.equal(m.contar("0.000034"), 2,"regla 3");
    
    test.equal(m.contar("0.05400"), 4, "regla 4 ceros a la derecha son significativos");
    test.equal(m.contar("300.00"), 5, "regla 4");
    
    test.equal(m.contar("123000"), 3, "Regla 5 ceros sin punto no valen");
    test.equal(m.contar("120000."), 6, "Regla 5 si tiene . los ceros si tienen valor");
    
    test.done();
};