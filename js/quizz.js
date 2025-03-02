// Função para mostrar a pergunta e alternativas
function mostrarPergunta() {
    const pergunta = "O que é um polígono regular?";
    const alternativas = [
        "A) Um polígono com todos os lados e ângulos iguais",
        "B) Um polígono com todos os lados diferentes",
        "C) Um polígono com todos os ângulos diferentes"
    ];
    // Exibir a pergunta e alternativas
    document.getElementById('pergunta').innerText = pergunta;
    document.getElementById('alternativas').innerHTML = alternativas.map((alt, index) => 
        `<button onclick="verificarResposta(${index})">${alt}</button>`
    ).join('<br>');
    // Função para verificar a resposta
    window.verificarResposta = function(index) {
        if (index === 0) {
            alert("Você acertou! Vamos à próxima pergunta?");
            setTimeout(() => {
                mostrarNovaPergunta();
            }, 2000);
        } else {
            alert("Resposta errada. Tente novamente.");
        }
    };
}

// Função para mostrar a nova pergunta
function mostrarNovaPergunta() {
    const novaPergunta = "Qual deve ser a medida dos ângulos para que seu polígono tenha todos os ângulos internos iguais?";
    document.getElementById('pergunta').innerText = novaPergunta;
    document.getElementById('alternativas').innerHTML = ''; // Limpar alternativas anteriores
}

// Inicializar a primeira pergunta
mostrarPergunta();