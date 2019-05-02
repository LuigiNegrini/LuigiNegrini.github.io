function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('X / Y: ' + x + ' / ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));
    document.getElementById('RQ1').innerHTML = "Texto da resposta: " + resp;
}

function Q2() {
    console.log('Q2');
    var d = Number.parseFloat(document.getElementById('d').value);
    var e = Number.parseFloat(document.getElementById('e').value);
    // Segue aqui seu código
    console.log('Cateto D:' + d)
    console.log('Cateto E:' + e)
    console.log('Hipotenusa:' + Math.sqrt(+ Math.pow(d,2) + + Math.pow(e,2)))
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    console.log('Profissão:' + profissao)
    if (profissao == 'Musicista' || profissao == 'Presidente') {console.log('Gênero: Masculino ou Feminino')
        } else if (profissao.endsWith('a')) {console.log('Gênero: Feminino')
        } else if (profissao.endsWith('z')) {console.log('Gênero: Feminino')
        } else if (profissao.endsWith('o')) {console.log('Gênero: Masculino')
        } else if (profissao.endsWith('r')) {console.log('Gênero: Masculino')
    }
}

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    // Segue aqui seu código
    if (a_str && b_str){
        console.log('Hipotenusa A =' + a_str)
        console.log('Cateto B =' + b_str)
        console.log('Cateto C =' + Math.sqrt(+ Math.pow(a_str,2) - + Math.pow(b_str,2)))
    } else if (a_str && c_str) {
        console.log('Hipotenusa A =' + a_str);
        console.log('Cateto B =' + Math.sqrt(+ Math.pow(a_str,2) - + Math.pow(c_str,2)));
        console.log('Cateto C =' + c_str)
    } else if (b_str && c_str) {
        console.log('Hipotenusa A =' + Math.sqrt(+ Math.pow(b_str,2) + + Math.pow(c_str,2)))
        console.log('Cateto B =' + b_str)
        console.log('Cateto C =' + c_str)
    }
}

function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var IMC =  + peso / + (+ Math.pow(altura,2))
    console.log('Gênero :' + genero)
    console.log('Altura :' + altura)
    console.log('Peso :' + peso)
    console.log('IMC :' + IMC)
    if (genero == 'Feminino'){
    } else if (IMC < 18.5){
        console.log('Resultado : Magro')
    } else if (IMC >= 18.5 && IMC < 25){
        console.log('Resultado : Sarado')
    } else if (IMC >= 25 && IMC < 30){
        console.log('Resultado : Rechonchudo')
    } else if (IMC > 30){
        console.log('Resultado : Obeso')
    }
    if (genero == 'Masculino'){
    } else if (IMC < 18.5){
        console.log('Resultado : Magra')
    } else if (IMC >= 18.5 && IMC < 25){
        console.log('Resultado : Sarada')
    } else if (IMC >= 25 && IMC < 30){
        console.log('Resultado : Rechonchuda')
    } else if (IMC > 30){
        console.log('Resultado : Obesa')
    }
}