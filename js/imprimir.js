// Função para voltar à página inicial
function Voltar() {
    window.location.href = 'fase1.html';
}

// Função para voltar à página de impressão
function voltar1() {
    window.location.href = 'imprimir.html';
}

// Função para sair do jogo
function sairJogo() {
    window.location.href = 'http://www.google.com/'; // Sai do jogo
}

// Função para carregar as imagens
function carregarImagens() {
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

        const img = document.createElement('img');
        img.src = imagem.dataURL;
        img.alt = imagem.legenda;
        img.style.width = '200px'; // Ajuste o tamanho conforme necessário
        img.style.cursor = 'pointer';
        imgContainer.onclick = () => imgContainer.classList.toggle('selecionada'); // Selecionar a div inteira

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
function deletarImagem(index) {
    const imagensSalvas = JSON.parse(localStorage.getItem('imagensSalvas')) || [];
    imagensSalvas.splice(index, 1);
    localStorage.setItem('imagensSalvas', JSON.stringify(imagensSalvas));
    carregarImagens();
}

// Evento para imprimir imagens selecionadas
document.getElementById('imprimirSelecionadas').addEventListener('click', () => {
    const imagensSelecionadas = document.querySelectorAll('.selecionada');
    if (imagensSelecionadas.length > 0) {
        const janelaImpressao = window.open('', '_blank');
        janelaImpressao.document.write('<style>');
        janelaImpressao.document.write('header {   height: 100px; margin-top: 1px;  margin-bottom: 10px;  padding: auto;  text-align: center;  width: 100%;  color:#ccc;  box-shadow: inset 0 0 10px #000;  background:  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,  linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);  background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;  background-color: #840b2a;  background-blend-mode: overlay; }');
        janelaImpressao.document.write('body {  margin-bottom: 2px;  margin-top: 2px;  font-family: Arial, sans-serif;  display: flex;  flex-direction: column;  margin-left: 50px;  margin-right: 50px;  align-items: center;  background-image: linear-gradient(purple, white);  background-clip: padding-box;  padding: 5px;  overflow-y: auto;  height: auto;  line-height: 1.6;}');
        janelaImpressao.document.write('footer {  height: 50px; font-size:10px; margin-top: 2px;  margin-bottom: 50x;  padding: 2px;  background:radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,  radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,  linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);  background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;  background-color: #840b2a;  background-blend-mode: overlay;  color: white;  width: 100%;}');
        janelaImpressao.document.write('table { width: 100%; table-layout: fixed; border-collapse: collapse; }');
        janelaImpressao.document.write('td { width: 50%; text-align: center; padding: 10px; vertical-align: top; }');
        janelaImpressao.document.write('fieldset { border: 1px solid #ddd; border-radius: 4px; padding: 10px; height: auto;}');
        janelaImpressao.document.write('legend { font-weight: bold; font-size: 40px; }'); // Aumentar o tamanho da fonte da legenda
        janelaImpressao.document.write('img { width: 50%; margin: 10px 0; border: 0px; padding: 5px; }'); // Reduzir o tamanho das imagens
        janelaImpressao.document.write('.orientacao { display: flex; flex-direction: line; align-items: flex-start; margin-left: 10px; margin-right: 15px; padding: 10px; border: solid outset 2px #ccc; background-color: transparent; }');
        janelaImpressao.document.write('.orientacao button { width: 300px; height: 50px; margin: 2px 15px; align-items: flex-start; padding: 5px; font-size: 16px; cursor: pointer; border: outset 5px rgb(151, 151, 181); border-radius: 5px; background: linear-gradient(45deg,#006782 40%, #0b1284 50%, #760ea1 60%, #83096e); color: white; transition: 0.2s; }');
        janelaImpressao.document.write('.orientacao button:hover { background-color: lightseagreen; transform: scale(1.1); }');
        janelaImpressao.document.write('.orientacao button:active { transform: scale(0.95); }');
        janelaImpressao.document.write('</style>');
        janelaImpressao.document.write('</head><body>');
        janelaImpressao.document.write('<header>');
        janelaImpressao.document.write('<h1 style="font-size: 40px;"><b>Triangularizando e Aprendendo</b></h1>'); // Aumentar o tamanho da fonte do cabeçalho
        janelaImpressao.document.write('</header>');
        janelaImpressao.document.write('<table>');
        janelaImpressao.document.write('<caption style="margin: auto;">Imagens Geradas no Jogo</caption>'); // Adiciona o título da tabela
        for (let i = 0; i < imagensSelecionadas.length; i += 2) {
            janelaImpressao.document.write('<tr>');
            janelaImpressao.document.write(`<td>
                <fieldset>
                    <legend>${imagensSelecionadas[i].querySelector('p').textContent}</legend>
                    <img src="${imagensSelecionadas[i].querySelector('img').src}">
                </fieldset>
            </td>`);
            if (imagensSelecionadas[i + 1]) {
                janelaImpressao.document.write(`<td>
                    <fieldset>
                        <legend>${imagensSelecionadas[i + 1].querySelector('p').textContent}</legend>
                        <img src="${imagensSelecionadas[i + 1].querySelector('img').src}">
                    </fieldset>
                </td>`);
            } else {
                janelaImpressao.document.write('<td></td>');
            }
            janelaImpressao.document.write('</tr>');
        }
        janelaImpressao.document.write('</table>');
        janelaImpressao.document.write('<div class="orientacao">');
        janelaImpressao.document.write('<fieldset class="orientacao" style="font-size: 20px; text-align: center; color: blue;">');
        janelaImpressao.document.write('<legend style="font-size: 20px; text-align: center; color: black;">Opções:</legend>');
        janelaImpressao.document.write('<button id="voltarBtn">Voltar</button>'); // Botão Voltar
        janelaImpressao.document.write('<button id="sairBtn">Sair</button>'); // Botão Sair
        janelaImpressao.document.write('</fieldset>');
        janelaImpressao.document.write('</div>');
        janelaImpressao.document.write('<footer><p style="font-size: 20px; text-align: center;">Criado por Pablo e Greice em 2025</p></footer>'); // Aumentar o tamanho da fonte do rodapé
        janelaImpressao.document.write('</body></html>');
        janelaImpressao.document.close();

        // Adicionar eventos aos botões
        janelaImpressao.document.getElementById('voltarBtn').addEventListener('click', () => {
            janelaImpressao.close();
            voltar1();
        });
        janelaImpressao.document.getElementById('sairBtn').addEventListener('click', () => {
            janelaImpressao.close();
            sairJogo();
        });

        janelaImpressao.print();
        janelaImpressao.onafterprint = () => janelaImpressao.close(); // Fechar a janela após a impressão
    } else {
        alert('Nenhuma imagem selecionada para impressão.');
    }
});

// Chame a função para carregar as imagens quando a página for carregada
window.onload = carregarImagens;