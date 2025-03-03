let contador = 1; // Contador para nomear as imagens sequencialmente

document.getElementById('salvarJogo').addEventListener('click', function () {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const canvasComFundo = document.createElement('canvas');
    const ctxComFundo = canvasComFundo.getContext('2d');
    canvasComFundo.width = canvas.width;
    canvasComFundo.height = canvas.height;
    
    ctxComFundo.fillStyle = 'white';
    ctxComFundo.fillRect(0, 0, canvasComFundo.width, canvasComFundo.height);
    ctxComFundo.drawImage(canvas, 0, 0);

    let imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    
    // Usar o contador para gerar a legenda
    let novaLegenda = 'Pol_' + contador++;
    
    const dataURL = canvasComFundo.toDataURL('image/jpeg');
    imagensSalvas.push({ dataURL, legenda: novaLegenda });
    localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
    
    carregarImagens();
});

// Função para carregar as imagens salvas no localStorage e exibi-las na tela
function carregarImagens() {
    const imagensContainer = document.getElementById('imagensContainer');
    imagensContainer.innerHTML = '';
    const imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];

    imagensSalvas.forEach((imagem, index) => {
        const imgWrapper = document.createElement('div');
        imgWrapper.style.textAlign = 'center';
        imgWrapper.style.marginBottom = '10px';
        imgWrapper.style.position = 'relative';
        imgWrapper.style.border = '1px solid #ddd';
        imgWrapper.style.padding = '10px';
        imgWrapper.style.display = 'flex'; // Flexbox para alinhar os elementos lado a lado
        imgWrapper.style.alignItems = 'center'; // Centraliza os itens na vertical
        imgWrapper.style.justifyContent = 'space-between'; // Garante que o checkbox e o botão fiquem nas extremidades
        imgWrapper.style.width = '220px';
        imgWrapper.style.borderRadius = '8px';
        imgWrapper.style.boxShadow = '2px 2px 8px rgba(0,0,0,0.1)';
        imgWrapper.style.background = '#fff';

        // Checkbox à esquerda
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '10px'; // Espaço entre o checkbox e a imagem

        // Imagem
        const img = document.createElement('img');
        img.src = imagem.dataURL;
        img.style.width = '150px'; // Ajuste do tamanho da imagem
        img.style.borderRadius = '5px';

        // Legenda
        const legendaElemento = document.createElement('p');
        legendaElemento.textContent = imagem.legenda;
        legendaElemento.style.fontWeight = 'bold';
        legendaElemento.style.marginTop = '5px';
        legendaElemento.style.fontSize = '1.2em';
        legendaElemento.style.marginBottom = '10px';

        // Botão de deletar (lixeira) à direita
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.style.position = 'absolute';
        deleteButton.style.top = '5px';
        deleteButton.style.right = '5px';
        deleteButton.style.background = 'red';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.padding = '5px';
        deleteButton.style.borderRadius = '5px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.onclick = (event) => {
            event.stopPropagation(); // Evitar que a seleção do checkbox seja ativada
            deletarImagem(index);
        };

        imgWrapper.appendChild(checkbox);
        imgWrapper.appendChild(img);
        imgWrapper.appendChild(legendaElemento);
        imgWrapper.appendChild(deleteButton);
        imagensContainer.appendChild(imgWrapper);
    });
    
}

// Função para deletar uma imagem específica pelo índice
function deletarImagem(index) {
    let imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    imagensSalvas.splice(index, 1);
    localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
    carregarImagens();
}

// Função para deletar todas as imagens salvas
function deletarTodas() {
    let imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];

    if (imagensSalvas.length === 0) {
        alert("Nenhuma imagem para deletar!");
        return;
    }

    if (confirm("Deseja deletar todas as imagens?")) {
        localStorage.removeItem('imagensSalvas');
        carregarImagens();
    } else {
        alert("Operação cancelada.");
    }
}

// Evento para carregar imagens ao iniciar a página
window.onload = carregarImagens;
