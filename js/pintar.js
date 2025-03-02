document.getElementById('gameCanvas').addEventListener('click', function() {
    let corSelecionada = '#00FF00'; // Cor padrão
    let verticesSelecionados = [];
    let verticesContagem = new Map();
    let facesPintadas = new Set();
    let numTriangulosPintados = 0;
    const numTriangulosJustapostos = numVertices - 2;

    document.getElementById('pintarElementos').addEventListener('click', function() {
        abrirSeletorDeCores();
    });

    function abrirSeletorDeCores() {
        let inputCor = document.createElement('input');
        inputCor.type = 'color';
        inputCor.value = corSelecionada;
        inputCor.style.display = 'none';
        document.body.appendChild(inputCor);

        inputCor.addEventListener('input', function() {
            corSelecionada = inputCor.value;
        });

        inputCor.addEventListener('change', function() {
            canvas.style.cursor = 'url(C:/Users/Greice Lacerda/OneDrive/ASSUNTOS DE KELI/CAP-UERJPARA ARTIGOS FUTUROS 2025/Jogo Malha Refeito 2025/Imagens/pincel.png"), auto'; // Ícone de pincel
            canvas.addEventListener('click', selecionarVertice);
        });

        inputCor.click();
    }

    function selecionarVertice(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        let verticeSelecionado = { x, y };

        if (verticesSelecionados.length < 3) {
            verticesSelecionados.push(verticeSelecionado);
            let key = `${x},${y}`;
            verticesContagem.set(key, (verticesContagem.get(key) || 0) + 1);

            if (verticesSelecionados.length === 3) {
                let faceKey = verticesSelecionados.map(v => `${v.x},${v.y}`).sort().join('-');
                if (facesPintadas.has(faceKey)) {
                    alert('Erro: Esta face já foi pintada.');
                } else {
                    pintarTriangulo(verticesSelecionados, corSelecionada);
                    facesPintadas.add(faceKey);
                    numTriangulosPintados++;
                    if (numTriangulosPintados === numTriangulosJustapostos) {
                        mostrarBotaoProximaFase();
                    }
                }
                verticesSelecionados = [];
            }
        }

        if (Array.from(verticesContagem.values()).some(count => count > 2)) {
            alert('Cada vértice pode ser selecionado no máximo duas vezes.');
            verticesSelecionados = [];
            verticesContagem.clear();
        }
    }

    function pintarTriangulo(vertices, cor) {
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        ctx.lineTo(vertices[1].x, vertices[1].y);
        ctx.lineTo(vertices[2].x, vertices[2].y);
        ctx.closePath();
        ctx.fillStyle = cor;
        ctx.fill();
    }

    function mostrarBotaoProximaFase() {
        let botaoProximaFase = document.createElement('button');
        botaoProximaFase.innerText = 'Próxima Fase';
        botaoProximaFase.addEventListener('click', function() {
            window.location.href = 'fase2.html';
        });
        document.body.appendChild(botaoProximaFase);
    }
});