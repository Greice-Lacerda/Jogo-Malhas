document.getElementById('gameCanvas').addEventListener('click', function() {
    let corSelecionada = '#00FF00'; // Cor padrão
    let verticesSelecionados = [];
    let verticesContagem = new Map();
    let triangulosPintados = 0; // Contador de triângulos pintados
    const n = 5; // Substitua pelo número de lados do seu polígono
    const maxTriangulos = n - 2; // Número máximo de triângulos justapostos

    document.getElementById('pintarElementos').addEventListener('click', function() {
        abrirSeletorDeCores();
    });

    function abrirSeletorDeCores() {
        let inputCor = document.createElement('input');
        inputCor.type = 'color';
        inputCor.value = corSelecionada;
        if (verticesSelecionados.length > 0) {
            alert('Você já selecionou vértices. Termine de pintar o triângulo antes de escolher outra cor.');
            return;
        }
        inputCor.style.display = 'none';
        document.body.appendChild(inputCor);

        inputCor.addEventListener('input', function() {
            corSelecionada = inputCor.value;
        });

        inputCor.addEventListener('change', function() {
            canvas.style.cursor = 'url("../Imagens/pincel.png"), auto'; // Ícone de pincel
            canvas.addEventListener('click', selecionarVertice);
        });

        inputCor.click();
    }

    function selecionarVertice(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        let verticeSelecionado = { x, y };

        if (triangulosPintados >= maxTriangulos) {
            alert('Você já pintou o número máximo de triângulos.');
            bloquearInteracoes();
            return;
        }

        if (verticesSelecionados.length < 3) {
            verticesSelecionados.push(verticeSelecionado);
            let key = `${x},${y}`;
            verticesContagem.set(key, (verticesContagem.get(key) || 0) + 1);

            if (verticesSelecionados.length === 3) {
                pintarTriangulo(verticesSelecionados, corSelecionada);
                triangulosPintados++;
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
               ctx.fillStyle = cor;
        ctx.fill();
    }

    function bloquearInteracoes() {
        document.getElementById('gameCanvas').removeEventListener('click', selecionarVertice);
        document.getElementById('pintarElementos').disabled = true;
    }
});