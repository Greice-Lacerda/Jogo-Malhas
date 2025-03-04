// Função para fechar a janela atual
function Fechar() {
    window.close();
}

// Função para voltar à página de impressão
function voltar1() {
    window.location.href = 'imprimir.html';
}

// Função para carregar as imagens salvas do localStorage e exibir na página de impressão
document.addEventListener('DOMContentLoaded', () => {
    const imagensContainer = document.getElementById('imagensContainer');
    let imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];

    if (imagensSalvas.length === 0) {
        imagensContainer.innerHTML = '<p>Nenhuma imagem salva.</p>';
        return;
    }

    imagensContainer.innerHTML = ""; // Limpa o container antes de adicionar novas imagens

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    imagensContainer.appendChild(table);

    let row;

    imagensSalvas.forEach((imagem, i) => {
        if (i % 3 === 0) {
            row = document.createElement("tr");
            tbody.appendChild(row);
        }

        const cell = document.createElement("td");
        cell.innerHTML = `
            <fieldset class="orientaçao">
                <legend class="Tb">
                    <b>
                        <input type='checkbox' class='imagensSalvas' data-index='${i}' style="width: 22px; height: 22px; margin-left: 20px;"> 
                        ${imagem.legenda}
                    </b>
                </legend>
                <div style="position: relative; display: inline-block;">
                    <button class="deleteBtn" data-index="${i}" 
                        style="position: absolute; top: 5px; right: 5px; background: none; border: none; cursor: pointer;">
                        <i class="fas fa-trash-alt" style="color: black; font-size: 18px;"></i>
                    </button>
                    <img width="280px" style="margin:15px" src='${imagem.dataURL}' alt='${imagem.legenda}'>
                </div>                    
            </fieldset>
        `;

        row.appendChild(cell);
    });

    // Evento para deletar uma única imagem ao clicar na lixeira
    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            imagensSalvas = imagensSalvas.filter((_, i) => i !== index);
            localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
            location.reload();
        });
    });

    // Botão para selecionar todas as imagens
    document.getElementById('selecionarTodasBtn').addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.imagensSalvas');
        const todasSelecionadas = [...checkboxes].every(checkbox => checkbox.checked);
        checkboxes.forEach(checkbox => checkbox.checked = !todasSelecionadas);
    });

    // Botão para deletar imagens selecionadas
    document.getElementById('deletarTodasBtn').addEventListener('click', () => {
        const checkboxesSelecionados = document.querySelectorAll('.imagensSalvas:checked');

        if (checkboxesSelecionados.length === 0) {
            alert("Nenhuma imagem selecionada para deletar.");
            return;
        }

        if (!confirm("Tem certeza de que deseja excluir as imagens selecionadas?")) {
            return;
        }

        imagensSalvas = imagensSalvas.filter((_, i) => 
            ![...checkboxesSelecionados].some(checkbox => parseInt(checkbox.dataset.index) === i)
        );

        localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
        location.reload();
    });
});

// Evento para imprimir as imagens selecionadas
document.getElementById('imprimirBtn').addEventListener('click', () => {
    const checkboxesSelecionados = document.querySelectorAll('.imagensSalvas:checked');

    if (checkboxesSelecionados.length === 0) {
        alert("Nenhuma imagem selecionada para impressão.");
        return;
    }

    const imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    const janelaImpressao = window.open('', '_blank');

    janelaImpressao.document.write(`
        <html>
        <head>
            <title>Impressão - Triangularizando e Aprendendo</title>
            <link rel="stylesheet" href="estilos/estilos-comuns.css">
            <link rel="stylesheet" href="estilos/estilo-imprimir.css">
        </head>
        <body>
            <main id="game-container">
                <header><h1>Triangularizando e Aprendendo</h1></header>
                <aside id="sidebar">
                <fieldset class="orientaçao">
                    <legend class="Tb"><b>Menu:</b></legend>            
                    <button id="voltarBtn"><b>Voltar</b></button>
                    <button id="sairBtn"><b>Sair</b></button>           
                </fieldset>
                </aside>
                <fieldset class="orientaçao">             
                    <legend><b class="Tb" style="text-align: center;">Imagens Selecionadas:</b></legend>
                    <table>
                        <tbody>
    `);

    let count = 0;
    janelaImpressao.document.write("<tr>");

    checkboxesSelecionados.forEach(checkbox => {
        const index = parseInt(checkbox.dataset.index);
        const imagem = imagensSalvas[index];

        if (!imagem) return;

        if (count === 3) {
            janelaImpressao.document.write("</tr><tr>");
            count = 0;
        }

        janelaImpressao.document.write(`
            <td>
                <fieldset class="orientaçao">
                    <legend style="color: black; fontSize: 24px; text-align: center;"><b class="Tb">${imagem.legenda}</b></legend>
                    <img width="150px" style="margin:15px" src='${imagem.dataURL}' alt='${imagem.legenda}'>
                </fieldset>
            </td>
        `);

        count++;
    });

    if (count > 0) {
        janelaImpressao.document.write("</tr>");
    }

    janelaImpressao.document.write(`
                        </tbody>
                    </table>
                </fieldset>
            </main>
            <script>
                document.getElementById('voltarBtn').addEventListener('click', () => {
                    window.close();
                });

                document.getElementById('sairBtn').addEventListener('click', () => {
                    window.close();
                });

                window.onload = () => {
                    window.print();
                };
            </script>
            <footer style="margin-top: 10px;">
                <fieldset id="credits">
                    <legend>Créditos</legend>
                    <p>Criado por Pablo e Greice em 2025</p>
                </fieldset>
            </footer>
        </body>
        </html>
    `);

    janelaImpressao.document.close();
});
