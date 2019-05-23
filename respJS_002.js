function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código 
    var resp = divide(x, y);
    console.log(resp);
    document.getElementById('RQ1').innerHTML = resp;
}
function divide(x, y) {
    return 'X / Y: ' + x + ' / ' + y + ' com Quociente = ' + Math.floor(x / y) + '; Resto = ' + (x % y);
}


function Q2() {
    console.log('Q2');
    var d = Number.parseInt(document.getElementById('d').value);
    var e = Number.parseInt(document.getElementById('e').value);
    // Segue aqui seu código
    var resp = hipotenusa(d, e);
    console.log(resp);
    document.getElementById('RQ2').innerHTML = resp;
}
function hipotenusa(d, e) {
    return 'Cateto d :' + d + '; Cateto e :' + e + '; Hipotenusa :' + Math.sqrt(+ Math.pow(d, 2) + + Math.pow(e, 2));
}


function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var resp = prof(profissao);
    console.log(resp);
    document.getElementById('RQ3').innerHTML = resp;
}
function prof(profissao) {
    if (profissao == 'Musicista' || profissao == 'Presidente') {
        return 'Gênero: Masculino ou Feminino'
    } else if (profissao.endsWith('a')) {
        return 'Gênero: Feminino'
    } else if (profissao.endsWith('z')) {
        return 'Gênero: Feminino'
    } else if (profissao.endsWith('o')) {
        return 'Gênero: Masculino'
    } else if (profissao.endsWith('r')) {
        return 'Gênero: Masculino'
    }
}


function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    // Segue aqui seu código
    var resp = funcao(a_str, b_str, c_str);
    console.log(resp);
    document.getElementById('RQ4').innerHTML = resp;
}
function funcao(a_str, b_str, c_str) {
    if (a_str && b_str) {
        return 'Hipotenusa A =' + a_str + '; Cateto B =' + b_str + '; Cateto C =' + Math.sqrt(+ Math.pow(a_str, 2) - + Math.pow(b_str, 2))
    } else if (a_str && c_str) {
        return 'Hipotenusa A =' + a_str + '; Cateto B =' + Math.sqrt(+ Math.pow(a_str, 2) - + Math.pow(c_str, 2)) + '; Cateto C =' + c_str
    } else if (b_str && c_str) {
        return 'Hipotenusa A =' + Math.sqrt(+ Math.pow(b_str, 2) + + Math.pow(c_str, 2)) + '; Cateto B =' + b_str + '; Cateto C =' + c_str
    }
}


function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var imc =  + peso / + (+ Math.pow(altura, 2));
    var resp = IMC(genero, peso, altura, imc);
    console.log(resp);
    document.getElementById('RQ5').innerHTML = resp;
}
function IMC(genero, peso, altura, imc) {
    if (genero == 'Feminino') {
    } else if (imc < 18.5) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Magro'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Sarado'
    } else if (imc >= 25 && imc < 30) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Rechonchudo'
    } else if (imc > 30) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Obeso'
    }
    if (genero == 'Masculino') {
    } else if (imc < 18.5) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Magra'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Sarada'
    } else if (imc >= 25 && imc < 30) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Rechonchuda'
    } else if (imc > 30) {
        return 'Gênero :' + genero + '; Altura :' + altura + '; Peso :' + peso + '; Resultado : Obesa'
    }
}