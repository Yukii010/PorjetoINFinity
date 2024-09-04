// Função para calcular e classificar o IMC
function calcularIMC() {
    // Solicita os dados do usuário
    const nome = prompt("Digite seu nome:");
    const alturaCentimetros = parseFloat(prompt("Digite sua altura em centímetros:"));
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    
    // Verifica se as entradas são válidas
    if (isNaN(alturaCentimetros) || isNaN(peso) || alturaCentimetros <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }
    
    // Converte altura para metros
    const alturaMetros = alturaCentimetros / 100;
    
    // Calcula o IMC
    const imc = peso / (alturaMetros * alturaMetros);
    
    // Classifica o IMC
    let classificacao;
    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }
    
    // Exibe os resultados
    alert(`Nome: ${nome}\nIMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
}
