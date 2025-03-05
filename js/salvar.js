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

    // Garantir que o contador seja um número inteiro
    contador = parseInt(contador) || 0;
    
    // Criar uma nova legenda
    let novaLegenda;
    do {
        novaLegenda = 'Pol_' + contador++;
    } while (imagensSalvas.some(img => img.legenda === novaLegenda));

    const dataURL = canvasComFundo.toDataURL('image/jpeg');
    imagensSalvas.push({ dataURL, legenda: novaLegenda });

    // Ordenar as imagens por legenda em ordem crescente
    imagensSalvas.sort((a, b) => {
        let numA = parseInt(a.legenda.split('_')[1]);
        let numB = parseInt(b.legenda.split('_')[1]);
        return numA - numB;
    });

    localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas)); 
    // Exibir mensagem de sucesso sem confirmação
    exibirMensagemTemporaria("Imagem salva com sucesso!");

    // Função para exibir a mensagem temporária no meio da tela
    function exibirMensagemTemporaria(mensagem) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = mensagem;
    msgDiv.style.position = 'fixed';
    msgDiv.style.top = '50%';
    msgDiv.style.left = '50%';
    msgDiv.style.transform = 'translate(-20%, -50%)';
    msgDiv.style.background = 'rgba(0, 128, 0, 0.8)';
    msgDiv.style.color = 'white';
    msgDiv.style.padding = '40px 30px';
    msgDiv.style.borderRadius = '8px';
    msgDiv.style.fontSize = '26px';
    msgDiv.style.fontWeight = 'bold';
    msgDiv.style.zIndex = '1000';
    document.body.appendChild(msgDiv);

    // Remover a mensagem após 2 segundos
    setTimeout(() => {
        msgDiv.remove();
    }, 1000);
}

// Evento para carregar imagens ao iniciar a página
window.onload = carregarImagens;
