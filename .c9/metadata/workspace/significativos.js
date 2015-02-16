{"filter":false,"title":"significativos.js","tooltip":"/significativos.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["","var contar =function(num) {","","    //todos los numeros que no tengan cero","    var regla1 = /^([1-9])+\\.{1}([1-9])+$/;","    if(regla1.test(num)) {","        return num.length - 1;","    }","    ","    //ceros entre numeros sin punto","    var regla2 = /^([1-9])+\\d+([1-9])+$/;","    if(regla2.test(num)) {","        return num.length;","    }","    ","    //numeros a la izq no son significativos","    var regla3 = /^[0]\\.{1}(0)+([1-9])+$/;","    if(regla3.test(num)){","        return num.substr(num.lastIndexOf(\"0\") + 1, num.length).length;","    }","    ","    //regla 4","    var regla4 = /^[1-9]\\d+\\.{1}\\d+$/;","    if(regla4.test(num)) {","        return num.length - 1;","    }","    ","    var regla4a = /^0*\\.{1}0*([1-9])+0*$/;","    if(regla4a.test(num)) {","        var decimales =  num.substr(num.lastIndexOf(\".\") + 1, num.length);","        var primerNumero = decimales.search(/[1-9]/);","        return decimales.substring(primerNumero, num.length).length;","    }","    ","    //regla 5","    var regla5a = /^([1-9])+0*$/;","    if(regla5a.test(num)) {","        return num.substring(0,num.indexOf(\"0\")).length;","    }","  ","    var regla5b = /^([1-9])+0*\\.{1}$/;","    if(regla5b.test(num)) {","        return num.length - 1;","    }","    ","  return 0;","};","","exports.contar = contar;",""]}]}]]},"ace":{"folds":[],"scrolltop":486,"scrollleft":0,"selection":{"start":{"row":49,"column":0},"end":{"row":49,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":31,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424061160950,"hash":"f5274ae79ea004b4b3a91960c104a6939f6dab17"}