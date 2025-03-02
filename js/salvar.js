// Função para carregar as imagens
export function carregarImagens() {
    const imagensContainer = document.getElementById('imagensContainer');
    imagensContainer.innerHTML = ''; // Limpar o container antes de adicionar as imagens
    const imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    imagensSalvas.forEach((imagem, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.style.display = 'inline-block';
        imgContainer.style.position = 'relative';
        imgContainer.style.margin = '10px';
        imgContainer.style.textAlign = 'center'; // Centralizar o texto
        imgContainer.classList.add('img-container'); // Adicionar classe para seleção

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.position = 'absolute';
        checkbox.style.top = '5px';
        checkbox.style.left = '5px';
        imgContainer.appendChild(checkbox);

        const img = document.createElement('img');
        img.src = imagem.dataURL;
        img.alt = imagem.legenda;
        img.style.width = '200px'; // Ajuste o tamanho conforme necessário
        img.style.cursor = 'pointer';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.style.position = 'absolute';
        deleteButton.style.top = '5px';
        deleteButton.style.right = '5px';
        deleteButton.style.background = 'transparent';
        deleteButton.style.border = 'none';
        deleteButton.style.cursor = 'pointer';
        deleteButton.onclick = (event) => {
            event.stopPropagation(); // Evitar que a seleção da div seja acionada
            deletarImagem(index);
        };

        const legenda = document.createElement('p');
        legenda.textContent = imagem.legenda; // Adicionar a legenda
        legenda.style.marginTop = '2px'; // Diminuir o espaçamento acima da legenda
        legenda.style.fontSize = '1.2em'; // Aumentar o tamanho da fonte da legenda

        imgContainer.appendChild(img);
        imgContainer.appendChild(legenda); // Adicionar a legenda após a imagem
        imgContainer.appendChild(deleteButton);
        imagensContainer.appendChild(imgContainer);
    });
}

// Função para deletar uma imagem
export function deletarImagem(index) {
    const imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    imagensSalvas.splice(index, 1);
    localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
    carregarImagens();
}