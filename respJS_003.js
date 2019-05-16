var pares = [];
// Crie aqui suas funções de apoio
function isPar(numero) {
    if(numero%2 === 0){
        return true;
    } else {
        return false;
    }
}
function Q1() {
    console.log('Q1');
    var aux = document.getElementById('numeroQ1').value;
    // Segue aqui seu código
    for(let i = 0; i <= aux; i++) {
        if(isPar(i)) {
            pares.push(i);
        }
    }
    console.log(pares);
    document.getElementById('RQ1').innerHTML = pares;
}

var