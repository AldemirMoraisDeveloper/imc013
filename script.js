
/*
   Abaixo de 17 muito abaixo do peso
   Entre 17 e 18.49 abaixo do peso
   Entre 18.5 e 24.99 peso normal
   Entre 25 e 29.99 acima do peso

   peso / (altura * altura);
*/ 

let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
    event.preventDefault();

    peso = document.querySelector('#peso').value;
    altura = document.querySelector('#altura').value;

    imc = peso / (altura*altura);

    resultado = document.querySelector('.result');

    if (imc < 17) {
        document.querySelector('.result').innerHTML = 'Resultado: ' + imc.toFixed(2) + ' Cuidado! você está muito abaixo do peso'
    }else if (imc > 17 && imc <= 18.49) {
        document.querySelector('.result').innerHTML = 'Resultado: ' + imc.toFixed(2) + ' Você está abaixo do peso'
    }else if (imc >= 18.5 && imc < 24.99) {
        document.querySelector('.result'). innerHTML = 'Resultado: ' + imc.toFixed(2) + ' Que bom! '  + 'Você está no peso ideal'
    }else if (imc > 25 && imc <= 29.99) {
        document.querySelector('.result'). innerHTML = 'Resultado: ' + imc.toFixed(2) + ' Você está acima do peso'
    }else if (imc > 30) {
        document.querySelector('.result'). innerHTML = 'Resultado: ' + imc.toFixed(2) + ' Sinal de obesidade, cuide-se!'
    }

    peso = document.querySelector('#peso').value = '';
    altura = document.querySelector('#altura').value = '';

}
