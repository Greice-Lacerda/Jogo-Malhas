document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('resetButton').addEventListener('click', function() {
    let canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Reset other game states if necessary
});

document.getElementById('printButton').addEventListener('click', function() {
    window.location.href = 'imprimir.html';
});

let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 400;
canvas.style.background = 'transparent';
canvas.style.border = '1px solid black';

let vertices = [];
let arestas = [];
let numVertices = parseInt(prompt('Escolha o número de vértices (mínimo 3):', 3));

document.getElementById('addVertex').addEventListener('click', function() {
    if (vertices.length < numVertices) {
        canvas.addEventListener('click', addVertice);
    }
});

function addVertice(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    vertices.push({ x, y });
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    if (vertices.length >= numVertices) {
        canvas.removeEventListener('click', addVertice);
    }
}

document.getElementById('addEdge').addEventListener('click', function() {
    canvas.addEventListener('click', addAresta);
});

function addAresta(event) {
    // Lógica para adicionar arestas
}

document.getElementById('pintar').addEventListener('click', function() {
    // Lógica para pintar elementos
});

document.getElementById('enviar').addEventListener('click', function() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let comentario = document.getElementById('comentario').value;

    // Lógica para criar e compartilhar a planilha Google
    // Aqui você pode usar a API do Google Sheets para criar e compartilhar a planilha
    // Exemplo de uso da API do Google Sheets:
    // https://developers.google.com/sheets/api/quickstart/js

    alert('Comentário enviado com sucesso!');
});