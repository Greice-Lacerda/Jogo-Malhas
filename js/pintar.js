document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("gameCanvas");
    let ctx = canvas.getContext("2d");

    let corSelecionada = "#f0ff00"; // Cor padrão
    let pinturaConcluida = false;
    let selectedVerticesForTriangle = [];
    let triangles = [];

    // Ativar modo de pintura ao clicar no botão
    document.getElementById("pintarElementos").addEventListener("click", () => {
        abrirSeletorDeCores();
    });

    function abrirSeletorDeCores() {
        if (pinturaConcluida) return; // Impede a reabertura após a pintura
    
        // Cria o elemento de input do tipo color
        let inputCor = document.createElement("input");
        inputCor.type = "color";
        inputCor.value = corSelecionada || "#f0ff00"; // Define a cor padrão se corSelecionada não estiver definida
        inputCor.style.position = "absolute";
        inputCor.style.left = "0"; // Posiciona à esquerda
        inputCor.style.top = "0";  // Posiciona no topo
        document.body.appendChild(inputCor);
    
        // Define a corSelecionada ao interagir com o seletor
        inputCor.addEventListener("input", () => {
            corSelecionada = inputCor.value;
            // Atualize a interface ou execute outras ações necessárias
        });
    
        // Restaura o cursor e adiciona o ouvinte de clique ao canvas
        inputCor.addEventListener("change", () => {
            canvas.style.cursor = 'url("Imagens/cursor-de-caneta.png"), auto'; // Ícone de pincel
            canvas.addEventListener("click", selecionarVertice);
        });
    
        // Dispara o clique no seletor para abrir a interface de seleção de cor
        inputCor.click();
    } 
    
    function selecionarVertice(event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let vertex = vertices.find(v => Math.hypot(v.x - x, v.y - y) < 10);

        if (vertex && !selectedVerticesForTriangle.includes(vertex)) {
            selectedVerticesForTriangle.push(vertex);

            if (selectedVerticesForTriangle.length === 3) {
                paintTriangle();
            }
        }
    }

    function paintTriangle() {
        let [v1, v2, v3] = selectedVerticesForTriangle;

        ctx.fillStyle = corSelecionada;
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.lineTo(v3.x, v3.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        triangles.push({ v1, v2, v3 });

        selectedVerticesForTriangle = [];

        // Verifica se a pintura está completa apenas depois de pintar todos os triângulos
        if (isFullyPainted()) {
            pinturaConcluida = true;
            canvas.style.cursor = "default"; // Voltar ao cursor normal
            setTimeout(() => {  // Espera a pintura ser completamente renderizada
                aplausoAplausos.mp3;
                alert("Toda a figura foi preenchida!"); // Exibe a mensagem após a pintura
            }, 0);

            setTimeout(() => {  // Espera a pintura ser completamente renderizada
                alert('Clique em salvar para continuar o jogo!'); // Exibe a mensagem após a pintura
            }, 2);
        }
    }

    function isFullyPainted() {
        return triangles.length >= vertices.length - 2;
    }
});
