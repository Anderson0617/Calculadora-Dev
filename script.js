
function insert(num) {
    const resultado = document.getElementById('resultado');
    resultado.value += num;
}

function clean() {
    document.getElementById('resultado').value = '';
}

function backspace() {
    const resultado = document.getElementById('resultado');
    resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
    const resultadoElement = document.getElementById('resultado');
    const expressaoOriginal = resultadoElement.value;

    try {
        const resultadoFinal = eval(expressaoOriginal);
        resultadoElement.value = expressaoOriginal + ' = ' + resultadoFinal;
    } catch (error) {
        resultadoElement.value = 'Erro';
    }
}

function raizQuadrada() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        var num = parseFloat(resultado);
        if (num >= 0) {
            document.getElementById('resultado').value = Math.sqrt(num);
        } else {
            document.getElementById('resultado').value = 'Erro';
        }
    }
}