function formatMoney(valor){
    valor = Math.ceil(valor * 100) / 100;
    valor = valor.toFixed(2);
    return valor
}


function formatSplit(valor){
    if (valor == 1){
        return valor + ' pessoa'
    }
    return valor + ' pessoas'
}
function update(){
    let conta = Number(document.getElementById('yourBill').value);
    let porcentagem = Number(document.getElementById('tipInput').value);
    let pessoas = Number(document.getElementById('splitInput').value);

    let gorjeta = conta * (porcentagem / 100);
    let total = conta + gorjeta;
    let totalPorPessoa = total / pessoas;

    document.getElementById('tipPercent').innerHTML = porcentagem + '%';
    document.getElementById('tipValue').innerHTML = formatMoney(gorjeta);
    document.getElementById('totalWithTip').innerHTML = formatMoney(total);
    document.getElementById('splitValue').innerHTML = formatSplit(pessoas);
    document.getElementById('billEach').innerHTML = formatMoney(totalPorPessoa);
}