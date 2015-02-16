
var contar =function(num) {

    var regla1a = /^([1-9])+$/;
    if(regla1a.test(num)) {
        return num.length;
    }
      
    //todos los numeros que no tengan cero
    var regla1 = /^([1-9])+\.([1-9])+$/;
    if(regla1.test(num)) {
        return num.length - 1;
    }
    
    //ceros entre numeros sin punto
    var regla2 = /^([1-9])+\d+([1-9])+$/;
    if(regla2.test(num)) {
        return num.length;
    }
    
    //numeros a la izq no son significativos
    var regla3 = /^[0]\.{1}(0)+([1-9])+$/;
    if(regla3.test(num)){
        return num.substr(num.lastIndexOf("0") + 1, num.length).length;
    }
    
    //regla 4
    var regla4 = /^[1-9]\d+\.{1}\d+$/;
    if(regla4.test(num)) {
        return num.length - 1;
    }
    
    var regla4a = /^0*\.{1}0*([1-9])+0*$/;
    if(regla4a.test(num)) {
        var decimales =  num.substr(num.lastIndexOf(".") + 1, num.length);
        var primerNumero = decimales.search(/[1-9]/);
        return decimales.substring(primerNumero, num.length).length;
    }
    
    //regla 5
    var regla5a = /^([1-9])+0*$/;
    if(regla5a.test(num)) {
        return num.substring(0,num.indexOf("0")).length;
    }
  
    var regla5b = /^([1-9])+0*\.{1}$/;
    if(regla5b.test(num)) {
        return num.length - 1;
    }
    
  return 0;
};

exports.contar = contar;
