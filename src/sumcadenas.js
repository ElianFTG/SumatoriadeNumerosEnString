function suma(cadena) {
    let sumatoria = 0;
    if(cadena != "") {
        let elementosdelacadena = cadena.split(/,|-/);
        for(var i = 0; i < elementosdelacadena.length; i ++) {
            if(parseInt(elementosdelacadena[i]) <= 1000) {
                sumatoria += parseInt(elementosdelacadena[i]);
            }
            
        }
    }
    console.log(sumatoria);
    return sumatoria;
  }
  
  export default suma;