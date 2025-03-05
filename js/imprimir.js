// Função para voltar à fase 1
function voltarParaFase1() {
    window.location.href = '../pages/fase1.html';
}

// Função para carregar imagens salvas do localStorage e exibir na página
document.addEventListener('DOMContentLoaded', () => {
    const imagensContainer = document.getElementById('imagensContainer');
    let imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    let imagensRemovidas = JSON.parse(localStorage.getItem('imagensRemovidas')) || [];

    if (imagensSalvas.length === 0) {
        imagensContainer.innerHTML = '<p> Nenhuma imagem salva.</p>';
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
            <fieldset class="orientacao">
                <legend class="Tb" style="text-align: center;"><input type='checkbox' class='imagensSalvas' data-index='${i}' style="width: 22px; height: 22px; margin-top: 25px;">${imagem.legenda}</b></legend>                
                    <div>           
                        <button class="deleteBtn" data-index="${i}"  
                            style="position: absolute; margin-top: 5px; left: 140px; 
                            background: none; 
                            border: none; 
                            cursor: pointer;">
                            <i class="fas fa-trash-alt" style="color: black; font-size: 18px;"></i>
                        </button>                       
                    <img src='${imagem.dataURL}' alt='${imagem.legenda}' style="width: 280px; margin: 15px; border: 3px solid white; object-fit: contain;">
                    </div>     
            </fieldset>
        `;

        row.appendChild(cell);
    });

    // Evento para deletar uma única imagem ao clicar na lixeira
    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            const imagemRemovida = imagensSalvas.splice(index, 1)[0];
            imagensRemovidas.push(imagemRemovida);
            localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
            localStorage.setItem('imagensRemovidas', JSON.stringify(imagensRemovidas));
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

        const janelaImpressao = window.open('', '_blank');

        janelaImpressao.document.write(`
            <html>
            <head>
                <title>Impressão - Triangularizando e Aprendendo</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                <link rel="stylesheet" href="../estilos/estilos-comuns.css">
                <link rel="stylesheet" href="../estilos/estilo-imprimir.css">
            </head>
            <body>
                <header><h1>Triangularizando e Aprendendo</h1></header>
                <main id="game-container">
                <aside id="sidebar">
                <fieldset class="orientacao"> 
                <legend><b class="Tb" style="text-align: center;">Menu:</b></legend>
                <button id="voltarBtn" style="width: 300px; margin: 20px; padding: 10px; font-size: 16px;">Voltar para janela de impressão</button>
                </fieldset><br>
                </aside>
                <fieldset class="orientacao">             
                    <legend><b class="Tb" style="text-align: center;">Imagens Selecionadas:</b></legend>
                    <table><tr>
        `);

        let count = 0;

        checkboxesSelecionados.forEach(checkbox => {
            const index = parseInt(checkbox.dataset.index);
            const imagem = imagensSalvas[index];

            if (count === 3) {
                janelaImpressao.document.write("</tr><tr>");
                count = 0;
            }

            janelaImpressao.document.write(`
                <td>
                    <fieldset class="orientacao">                        
                        <legend><b class="Tb" style="text-align: center;">${imagem.legenda}</b></legend>
                        <div id="imagensSalvas">                      
                        <img width="200px" src='${imagem.dataURL}'>
                        </div>
                    </fieldset>
                </td>
            `);

            count++;
        });

        janelaImpressao.document.write(`
            </tr></table></fieldset>            
            </main>
            <footer>
                <fieldset id="credits">
                    <legend>Créditos</legend>
                    Criado por Pablo e Greice em 2025
                </fieldset>
            </footer>
            </body>
            </html>
        `);
        
        // Fecha o documento da janela de impressão
        janelaImpressao.document.close();

        // Adiciona um ouvinte de evento para o evento 'load' da janela de impressão
        janelaImpressao.addEventListener('load', () => {
            janelaImpressao.print();

            // Obtém o botão "Voltar" na janela de impressão
            const voltarBtn = janelaImpressao.document.getElementById('voltarBtn');
            if (voltarBtn) {

                // Adiciona um ouvinte de evento de clique ao botão "Voltar"
                voltarBtn.addEventListener('click', () => {

                    // Fecha a janela de impressão ao clicar no botão "Voltar"
                    janelaImpressao.close();
                });
            } else {
                console.error('Botão "Voltar" não encontrado na janela de impressão.');
            }
        }, true);
    });

    // Função para selecionar/deselecionar todas as checkboxes
    function selecionarTodas() {
        const checkboxes = document.querySelectorAll('.imagensSalvas');
        const selecionarTodasBtn = document.getElementById('selecionarTodasBtn');
        const isChecked = selecionarTodasBtn.classList.toggle('imagensSalvas');

        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    }

    // Função para deletar todas as imagens selecionadas
    function deletarTodas() {
        if (confirm('Tem certeza que deseja deletar todas as imagens selecionadas?')) {
            const imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
            const checkboxesSelecionados = document.querySelectorAll('.imagensSalvas:checked');

            checkboxesSelecionados.forEach(checkbox => {
                const index = parseInt(checkbox.dataset.index);
                const imagemRemovida = imagensSalvas.splice(index, 1)[0];
                imagensRemovidas.push(imagemRemovida);
            });

            localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
            localStorage.setItem('imagensRemovidas', JSON.stringify(imagensRemovidas));
            location.reload();
        }
    }

    // Função para desfazer a última exclusão de imagem
    function desfazerDeletar() {
        if (imagensRemovidas.length === 0) {
            alert('Não há imagens deletadas para restaurar.');
            return;
        }

        const imagemRestaurada = imagensRemovidas.pop();
        imagensSalvas.push(imagemRestaurada);

        localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
        localStorage.setItem('imagensRemovidas', JSON.stringify(imagensRemovidas));
        location.reload();
    }

    // Adiciona eventos aos botões
    document.getElementById('selecionarTodasBtn').addEventListener('click', selecionarTodas);
    document.getElementById('deletarTodasBtn').addEventListener('click', deletarTodas);
    document.getElementById('desfazerDeletarBtn').addEventListener('click', desfazerDeletar);
});
