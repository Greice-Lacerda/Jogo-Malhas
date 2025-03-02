function abrirPromptDesafio() {
    let resposta = confirm("Para ir para a próxima fase, você precisa movimentar os vértices e formar um polígono regular. Vamos lá?");
    if (resposta) {
        permitirMovimentarVertices();
    }
}

function permitirMovimentarVertices() {
    canvas.addEventListener('mousedown', iniciarMovimento);
    canvas.addEventListener('mouseup', finalizarMovimento);
}

function iniciarMovimento(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    verticeSelecionado = vertices.find(v => Math.hypot(v.x - x, v.y - y) < 5);

    if (verticeSelecionado) {
        canvas.addEventListener('mousemove', moverVertice);
    }
}

function moverVertice(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    verticeSelecionado.x = x;
    verticeSelecionado.y = y;
    redesenharCanvas();
}

function finalizarMovimento() {
    canvas.removeEventListener('mousemove', moverVertice);
    if (verificarPoligonoRegular()) {
        abrirPromptParabens();
        lancarConfetes();
    }
}

function redesenharCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    vertices.forEach(v => {
        ctx.beginPath();
        ctx.arc(v.x, v.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
    arestas.forEach(a => {
        ctx.beginPath();
        ctx.moveTo(a.v1.x, a.v1.y);
        ctx.lineTo(a.v2.x, a.v2.y);
        ctx.stroke();
        desenharMedidaAresta(a);
    });
}

function desenharMedidaAresta(aresta) {
    let xMedio = (aresta.v1.x + aresta.v2.x) / 2;
    let yMedio = (aresta.v1.y + aresta.v2.y) / 2;
    let medida = Math.round(Math.hypot(aresta.v1.x - aresta.v2.x, aresta.v1.y - aresta.v2.y));
    ctx.fillStyle = 'black';
    ctx.fillText(medida, xMedio, yMedio);
}

function verificarPoligonoRegular() {
    if (vertices.length < 3) return false;

    let distancias = [];
    for (let i = 0; i < vertices.length; i++) {
        let v1 = vertices[i];
        let v2 = vertices[(i + 1) % vertices.length];
        let dx = v1.x - v2.x;
        let dy = v1.y - v2.y;
        distancias.push(Math.hypot(dx, dy));
    }

    let primeiraDistancia = distancias[0];
    return distancias.every(d => d === primeiraDistancia);
}

function abrirPromptParabens() {
    // Criar uma janela centralizada
    let janela = document.createElement('div');
    janela.style.position = 'fixed';
    janela.style.top = '50%';
    janela.style.left = '50%';
    janela.style.transform = 'translate(-50%, -50%)';
    janela.style.padding = '20px';
    janela.style.backgroundColor = 'white';
    janela.style.border = '2px solid black';
    janela.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    janela.style.textAlign = 'center';

    // Criar o texto de parabéns
    let texto = document.createElement('p');
    texto.innerText = 'Parabéns! Você completou o desafio.';
    texto.style.color = 'red';
    texto.style.fontSize = '20px';
    texto.style.animation = 'piscar 1s infinite';
    janela.appendChild(texto);

    // Criar o botão "Próxima Fase"
    let botaoProximaFase = document.createElement('button');
    botaoProximaFase.innerText = 'Próxima Fase';
    botaoProximaFase.style.backgroundColor = 'yellow';
    botaoProximaFase.style.border = 'none';
    botaoProximaFase.style.padding = '10px 20px';
    botaoProximaFase.style.cursor = 'pointer';
    botaoProximaFase.addEventListener('click', function() {
        window.location.href = 'fase2.html';
    });
    janela.appendChild(botaoProximaFase);

    // Adicionar a janela ao corpo do documento
    document.body.appendChild(janela);

    // Adicionar estilo de animação para o texto piscante
    let estilo = document.createElement('style');
    estilo.innerHTML = `
        @keyframes piscar {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(estilo);
}

function lancarConfetes() {
    let confetesContainer = document.createElement('div');
    confetesContainer.style.position = 'fixed';
    confetesContainer.style.top = '0';
    confetesContainer.style.left = '0';
    confetesContainer.style.width = '100%';
    confetesContainer.style.height = '100%';
    confetesContainer.style.pointerEvents = 'none';
    confetesContainer.style.overflow = 'hidden';
    document.body.appendChild(confetesContainer);

    for (let i = 0; i < 100; i++) {
        let confete = document.createElement('div');
        confete.style.position = 'absolute';
        confete.style.width = '10px';
        confete.style.height = '10px';
        confete.style.backgroundColor = getRandomColor();
        confete.style.top = `${Math.random() * 100}%`;
        confete.style.left = `${Math.random() * 100}%`;
        confete.style.animation = `cair ${Math.random() * 3 + 2}s linear infinite`;
        confetesContainer.appendChild(confete);
    }

    let estiloConfetes = document.createElement('style');
    estiloConfetes.innerHTML = `
        @keyframes cair {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(estiloConfetes);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}