document.getElementById('gameCanvas').addEventListener('click', function() {
    let corSelecionada = '#00FF00'; // Cor padrão
    let verticesSelecionados = [];
    let verticesContagem = new Map();

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
            canvas.style.cursor = 'url("Imagens/pincel.png"), auto'; // Ícone de pincel
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
                pintarTriangulo(verticesSelecionados, corSelecionada);
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
});