const form = document.getElementById('form-atividade');
let linhas = '';
let inputNotaArray = []
let inputNomeArray = []
let tfoot_td = document.querySelector('td#nota_media')
let aprovado = document.querySelector('span.resultado')
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji comemorando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado">'
const notaMedia = prompt('Digite abaixo a Nota Média:')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha()
    console.log(inputNomeArray)
});



function addLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    inputNotaArray.push(Number(inputNotaAtividade.value))



    for (let c = 0; c < inputNomeArray.length; c++) {
        if (inputNomeAtividade.value.toUpperCase() == inputNomeArray[c]) {
            alert('Essa atividade já foi adicionada')
            return true
    }
    } if (inputNomeAtividade.value.toUpperCase() != inputNomeArray) {
        inputNomeArray.push(inputNomeAtividade.value.toUpperCase());
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaArray[inputNotaArray.length - 1]}</td>`;
        linha += `<td>${inputNotaArray[inputNotaArray.length - 1] >= notaMedia ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    
        inputNomeAtividade.focus()
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
        calculaMedia()
    }
}

function calculaMedia () {
    let valortotal = 0
    for(let pos in inputNotaArray){
        valortotal += inputNotaArray[pos]
    }
    let media = valortotal / inputNotaArray.length

    tfoot_td.innerHTML = ''
    tfoot_td.innerHTML += (`<b>${media.toFixed(2)}</b>`)
    
    if(media >= notaMedia) {
        aprovado.innerHTML = 'Aprovado'
        aprovado.style.background = 'green'
    } else {
        aprovado.innerHTML = 'Reprovado'
        aprovado.style.background = 'red'
    }
}
