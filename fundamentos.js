//Exercício aula 01 - Fundamentos JS

function calcularPreco(produto, preco) {
    let custoDeEnvio;

    if (preco > 1 && preco <= 2000) {
        custoDeEnvio = 300;
    } else if (preco > 2000 && preco <= 4000) {
        custoDeEnvio = 450;
    } else {
        custoDeEnvio = 700;
    }

    let precoFinal = preco + custoDeEnvio;

    console.log("O produto " + produto + " custa R$" + preco + "." + " Seu custo de envio é R$" + custoDeEnvio + "." + " Portanto, o preço final é R$" + precoFinal);
}

calcularPreco("Macbook", 2500);
calcularPreco("Celular", 500);
calcularPreco("Playstation", 4500);

