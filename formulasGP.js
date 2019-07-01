function ATriEq() {
    var lado = Number.parseFloat(document.getElementById('lado0').value);
    var resp = 'Área do triângulo equilátero: ' + (lado * lado * Math.sqrt(3) / 4) + 'u.a.';
    console.log(resp);
    document.getElementById('F0').innerHTML = resp;
}
function PTriEq() {
    var lado = Number.parseFloat(document.getElementById('lado1').value);
    var resp = 'Perímetro do triângulo equilátero: ' + (lado * 3) + 'u.c.';
    console.log(resp);
    document.getElementById('F1').innerHTML = resp;
}

function ATri() {
    var base = Number.parseFloat(document.getElementById('base0').value);
    var altura = Number.parseFloat(document.getElementById('altura0').value);
    var resp = 'Área do triângulo: ' + (base * altura / 2) + 'u.a.';
    console.log(resp);
    document.getElementById('F2').innerHTML = resp;
}
function PTri() {
    var lado1 = Number.parseFloat(document.getElementById('lado2').value);
    var lado2 = Number.parseFloat(document.getElementById('lado3').value);
    var lado3 = Number.parseFloat(document.getElementById('lado4').value);
    var resp = 'Perímetro do triângulo: ' + (lado1 + lado2 + lado3) + 'u.c.';
    console.log(resp);
    document.getElementById('F3').innerHTML = resp;
}

function AQuad() {
    var lado = Number.parseFloat(document.getElementById('lado5').value);
    var resp = 'Área do quadrado: ' + (lado * lado) + 'u.a.';
    console.log(resp);
    document.getElementById('F4').innerHTML = resp;
}
function PQuad() {
    var lado = Number.parseFloat(document.getElementById('lado6').value);
    var resp = 'Perímetro do quadrado: ' + (lado * 4) + 'u.c.';
    console.log(resp);
    document.getElementById('F5').innerHTML = resp;
}

function ARet() {
    var base = Number.parseFloat(document.getElementById('base1').value);
    var altura = Number.parseFloat(document.getElementById('altura1').value);
    var resp = 'Área do retângulo: ' + (base * altura) + 'u.a.';
    console.log(resp);
    document.getElementById('F6').innerHTML = resp;
}
function PRet() {
    var base = Number.parseFloat(document.getElementById('base2').value);
    var altura = Number.parseFloat(document.getElementById('altura2').value);
    var resp = 'Perímetro do retângulo: ' + ((base + altura) * 2) + 'u.c.';
    console.log(resp);
    document.getElementById('F7').innerHTML = resp;
}

function APar() {
    var base = Number.parseFloat(document.getElementById('base3').value);
    var altura = Number.parseFloat(document.getElementById('altura3').value);
    var resp = 'Área do paralelogramo: ' + (base * altura) + 'u.a.';
    console.log(resp);
    document.getElementById('F8').innerHTML = resp;
}
function PPar() {
    var lado1 = Number.parseFloat(document.getElementById('lado7').value);
    var lado2 = Number.parseFloat(document.getElementById('lado8').value);
    var resp = 'Perímetro do paralelogramo: ' + ((lado1 + lado2) * 2) + 'u.c.';
    console.log(resp);
    document.getElementById('F9').innerHTML = resp;
}

function ATrap() {
    var base1 = Number.parseFloat(document.getElementById('base4').value);
    var base2 = Number.parseFloat(document.getElementById('base5').value);
    var altura = Number.parseFloat(document.getElementById('altura4').value);
    var resp = 'Área do trapézio: ' + ((base1 + base2) * altura / 2) + 'u.a.';
    console.log(resp);
    document.getElementById('F10').innerHTML = resp;
}
function PTrap() {
    var base1 = Number.parseFloat(document.getElementById('base6').value);
    var base2 = Number.parseFloat(document.getElementById('base7').value);
    var lado1 = Number.parseFloat(document.getElementById('lado9').value);
    var lado2 = Number.parseFloat(document.getElementById('lado10').value);
    var resp = 'Perímetro do trapézio: ' + (base1 + base2 + lado1 + lado2) + 'u.c.';
    console.log(resp);
    document.getElementById('F11').innerHTML = resp;
}

function ALos() {
    var diagonal1 = Number.parseFloat(document.getElementById('diagonal0').value);
    var diagonal2 = Number.parseFloat(document.getElementById('diagonal1').value);
    var resp = 'Área do losango: ' + (diagonal1 * diagonal2 / 2) + 'u.a.';
    console.log(resp);
    document.getElementById('F12').innerHTML = resp;
}
function PLos() {
    var lado = Number.parseFloat(document.getElementById('lado11').value);
    var resp = 'Perímetro do losango: ' + (lado * 4) + 'u.c.';
    console.log(resp);
    document.getElementById('F13').innerHTML = resp;
}

function APent() {
    var lado = Number.parseFloat(document.getElementById('lado12').value);
    var resp = 'Área do pentágono: ' + (5 / 4 * (lado * lado) / Math.sqrt(5 - (2 * Math.sqrt(5)))) + 'u.a.';
    console.log(resp);
    document.getElementById('F14').innerHTML = resp;
}
function PPent() {
    var lado = Number.parseFloat(document.getElementById('lado13').value);
    var resp = 'Perímetro do pentágono: ' + (lado * 5) + 'u.c.';
    console.log(resp);
    document.getElementById('F15').innerHTML = resp;
}

function AHex() {
    var lado = Number.parseFloat(document.getElementById('lado14').value);
    var resp = 'Área do hexágono: ' + (6* lado * lado * Math.sqrt(3) / 4) + 'u.a.';
    console.log(resp);
    document.getElementById('F16').innerHTML = resp;
}
function PHex() {
    var lado = Number.parseFloat(document.getElementById('lado15').value);
    var resp = 'Perímetro do hexágono: ' + (lado * 6) + 'u.c.';
    console.log(resp);
    document.getElementById('F17').innerHTML = resp;
}

function ACir() {
    var raio = Number.parseFloat(document.getElementById('raio0').value);
    var resp = 'Área do círculo: ' + (Math.PI * raio * raio) + 'u.a.';
    console.log(resp);
    document.getElementById('F18').innerHTML = resp;
}
function PCir() {
    var raio = Number.parseFloat(document.getElementById('raio1').value);
    var resp = 'Perímetro do círculo: ' + (2 * Math.PI * raio) + 'u.c.';
    console.log(resp);
    document.getElementById('F19').innerHTML = resp;
}