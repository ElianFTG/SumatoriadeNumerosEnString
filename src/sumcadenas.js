function suma(cadena) {
    let sumatoria = 0;
    if(cadena != "") {
        let elementosdelacadena = cadena.split(/,|-/);
        for(var i = 0; i < elementosdelacadena.length; i ++) {
            sumatoria += parseInt(elementosdelacadena[i]);
        }
    }
    return sumatoria;
  }
  
  export default suma;