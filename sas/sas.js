function converter() {
    var valorBRL = parseFloat(document.getElementById('valor').value);
    var moeda = document.getElementById('moeda').value;
    

    var taxaUSD = 5.20; 
    var taxaEUR = 5.80; 
 
    if (isNaN(valorBRL) || valorBRL < 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido em Reais.';
        return;
    }

    var valorConvertido;
    if (moeda === 'usd') {
        valorConvertido = valorBRL / taxaUSD;
        document.getElementById('resultado').innerText = `R$ ${valorBRL.toFixed(2)} é igual a $${valorConvertido.toFixed(2)} USD.`;
    } else if (moeda === 'eur') {
        valorConvertido = valorBRL / taxaEUR;
        document.getElementById('resultado').innerText = `R$ ${valorBRL.toFixed(2)} é igual a €${valorConvertido.toFixed(2)} EUR.`;
    }
}