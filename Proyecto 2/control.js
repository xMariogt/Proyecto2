let numero = 0;

const valor = document.querySelector('#contar');
const disminuir = document.querySelector('#disminuir');
const aumentar = document.querySelector('#aumentar');
const reset = document.querySelector('#reset');

aumentar.addEventListener('click', () => {
    numero++;
    valor.textContent = numero;

    if (numero > 0) {
        valor.style.color = "greenyellow";
    }
    else if (numero < 0) {
        valor.style.color = "red";
    }
    else{
        valor.style.color = "black";
    }
});

disminuir.addEventListener('click', () => {
    numero--;
    valor.textContent = numero;

    if (numero > 0) {
        valor.style.color = "greenyellow";
    }
    else if (numero < 0) {
        valor.style.color = "red";
    }
    else{
        valor.style.color = "black";
    }
});

reset.addEventListener('click', () => {
    numero = 0;
    valor.textContent = numero;
    valor.style.color = "black";
});




