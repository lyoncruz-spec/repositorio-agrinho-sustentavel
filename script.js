// Aguarda o HTML carregar completamente antes de aplicar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    const btnCalcular = document.getElementById('btn-calcular');
    
    // Adiciona o evento de clique ao botão
    btnCalcular.addEventListener('click', () => {
        calcularImpacto();
    });
});

function calcularImpacto() {
    const hectaresInput = document.getElementById('hectares');
    const resultadoDiv = document.getElementById('resultado');
    
    const hectares = parseFloat(hectaresInput.value);

    // Validação de dados de entrada
    if (isNaN(hectares) || hectares <= 0) {
        alert('Por favor, insira um número válido e maior que zero de hectares.');
        resultadoDiv.style.display = 'none';
        return;
    }

    // Fórmulas fictícias baseadas em estatísticas de sustentabilidade no cultivo do milho
    const carbonoFixado = (hectares * 2.5).toFixed(1);   // Média de 2.5 t de CO2 por hectare
    const aguaEconomizada = (hectares * 150).toFixed(0);  // Média de 150 mil litros economizados
    const sacasProduzidas = (hectares * 110).toFixed(0);  // Média de 110 sacas por hectare

    // Inserção dos dados calculados nas respetivas tags HTML
    document.getElementById('carbono').innerText = carbonoFixado;
    document.getElementById('agua').innerText = aguaEconomizada;
    document.getElementById('producao').innerText = sacasProduzidas;

    // Torna visível o painel com os resultados calculados
    resultadoDiv.style.display = 'block';
}