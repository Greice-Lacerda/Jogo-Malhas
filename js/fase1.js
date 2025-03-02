let numVertices = parseInt(prompt('Escolha o número de vértices (mínimo 3):', 3));
if (isNaN(numVertices) || numVertices < 3) {
    window.location.href = 'index.html';
} else {
    // Reiniciar o jogo
    iniciarJogo();
}
let vertices = [];
let arestas = [];
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

function voltar() {
    window.location.href = 'index.html'; 
}

function imprimirJogo() {
    window.open('imprimir.html', '_blank');
}

function sairJogo() {
    window.location.href = 'http://www.google.com/'; // Sai do jogo
}

document.getElementById('resetButton').addEventListener('click', function() {
    if (confirm('Tem certeza de que deseja resetar o jogo?')) {
        let canvas = document.getElementById('gameCanvas');
        let ctx = canvas.getContext('2d');
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

function iniciarJogo() {
    // Lógica de inicialização do jogo
    desenharCanvasLimpo();
    // Outras lógicas de inicialização, se necessário
}

// Chamar a função iniciarJogo() na inicialização da página
iniciarJogo();

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
    canvas.addEventListener('click', selectVertices);
});

let selectedVertices = [];

function selectVertices(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let vertex = vertices.find(v => Math.hypot(v.x - x, v.y - y) < 5);
    if (vertex && selectedVertices.length < 2) {
        selectedVertices.push(vertex);
        if (selectedVertices.length === 2) {
            addAresta();
        }
    }
}

function addAresta() {
    let v1 = selectedVertices[0];
    let v2 = selectedVertices[1];

    if (!edgeExists(v1, v2) && !linesIntersect(v1, v2)) {
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.stroke();
        arestas.push({ v1, v2 });
    }

    selectedVertices = [];

    if (arestas.length < numVertices * (numVertices - 1) / 2) {
        canvas.addEventListener('click', selectVertices);
    } else {
        canvas.removeEventListener('click', selectVertices);
        document.getElementById('addEdge').disabled = true;
    }
}

function edgeExists(v1, v2) {
    return arestas.some(aresta => 
        (aresta.v1 === v1 && aresta.v2 === v2) || 
        (aresta.v1 === v2 && aresta.v2 === v1)
    );
}

function linesIntersect(v1, v2) {
    for (let aresta of arestas) {
        if (doLinesIntersect(v1, v2, aresta.v1, aresta.v2)) {
            return true;
        }
    }
    return false;
}

function doLinesIntersect(p1, p2, p3, p4) {
    function ccw(A, B, C) {
        return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
    }
    return (ccw(p1, p3, p4) !== ccw(p2, p3, p4)) && (ccw(p1, p2, p3) !== ccw(p1, p2, p4));
}
ctx.lineWidth = 2; // Aumentar a espessura da aresta
function areAllVerticesConnected() {
    if (vertices.length === 0) return true;

    let visited = new Set();
    let stack = [vertices[0]];

    while (stack.length > 0) {
        let vertex = stack.pop();
        visited.add(vertex);

        arestas.forEach(aresta => {
            if (aresta.v1 === vertex && !visited.has(aresta.v2)) {
                stack.push(aresta.v2);
            } else if (aresta.v2 === vertex && !visited.has(aresta.v1)) {
                stack.push(aresta.v1);
            }
        });
    }

    return visited.size === vertices.length;
}