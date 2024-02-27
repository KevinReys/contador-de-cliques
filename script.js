// Variáveis globais
let clickCount = 0;

// Elementos do DOM
const clickButton = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");

// Função para atualizar o contador de cliques
function updateClickCount() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
}

// Adiciona um ouvinte de eventos ao botão de clique
clickButton.addEventListener("click", updateClickCount);
