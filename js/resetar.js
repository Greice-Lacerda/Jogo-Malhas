document.getElementById('resetButton').addEventListener('click', function() {
    if (confirm('Tem certeza de que deseja resetar o jogo?')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        vertices = [];
        arestas = [];
        
        // Redesenhar o canvas limpo
        desenharCanvasLimpo();

        // Solicitar nova escolha de número de vértices
        numVertices = parseInt(prompt('Escolha o número de vértices (mínimo 3):', 3));
        if (isNaN(numVertices) || numVertices < 3) {
            window.location.href = 'index.html';
        } else {
            // Reiniciar o jogo
            iniciarJogo();
            // Reiniciar a função pintar
            pintar();
        }
    }
});


function desenharCanvasLimpo() {
    let canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 400;
    canvas.style.background = 'transparent';
    canvas.style.border = '1px solid black';
    canvas.style.backgroundColor = 'white';
    canvas.style.backgroundImage = 
        'linear-gradient(lightgray 1px, transparent 1px), ' +
        'linear-gradient(90deg, lightgray 1px, transparent 1px)';
    canvas.style.backgroundSize = '20px 20px';
    canvas.style.backgroundRepeat = 'repeat';
    canvas.style.borderRadius = '10px';
    canvas.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
}

