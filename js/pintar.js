document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("gameCanvas");
    let ctx = canvas.getContext("2d");

    let corSelecionada = "#000000"; // Cor padrão (preto)
    let pinturaConcluida = false;
    let selectedVerticesForTriangle = [];
    let triangles = [];

    // Ativar modo de pintura ao clicar no botão
    document.getElementById("pintarElementos").addEventListener("click", () => {
        abrirSeletorDeCores();
    });

    function abrirSeletorDeCores() {
        if (pinturaConcluida) return; // Impede a reabertura após a pintura

        let inputCor = document.createElement("input");
        inputCor.type = "color";
        inputCor.value = corSelecionada;
        inputCor.style.position = "absolute";
        inputCor.style.right = "0";
        inputCor.style.bottom = "0";
        document.body.appendChild(inputCor);

        inputCor.addEventListener("input", () => {
            corSelecionada = inputCor.value;
        });

        inputCor.addEventListener("change", () => {
            canvas.style.cursor = 'url("C:/Users/Greice Lacerda/OneDrive/ASSUNTOS DE KELI/CAP-UERJPARA ARTIGOS FUTUROS 2025/Jogo Malha Refeito 2025/Imagens/pincel.png"), auto'; // Ícone de pincel
            canvas.addEventListener("click", selecionarVertice);
        });

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
                alert("Toda a figura foi preenchida!"); // Exibe a mensagem após a pintura
            }, 0);
        }
    }

    function isFullyPainted() {
        return triangles.length >= vertices.length - 2;
    }
});
