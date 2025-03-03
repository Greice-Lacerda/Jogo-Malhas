// Função para voltar à página do jogo
function Fechar() {
    window.close();
}

// Função para voltar à página de impressão
function voltar1() {
    window.location.href = 'imprimir.html';
}

// Função para carregar as imagens
document.getElementById('iimagensSalvas').addEventListener('click', () => {
    const imagensSelecionadas = document.querySelectorAll('imagensSalvas');
    if (imagensSelecionadas.length > 0) {
        const janelaImpressao = window.open('', '_blank');
        janelaImpressao.document.write('<style>');
        janelaImpressao.document.write('header { height: 100px; margin-top: 1px; margin-bottom: 10px; padding: auto; text-align: center; width: 100%; color:#ccc; box-shadow: inset 0 0 10px #000; background: radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%); background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%; background-color: #840b2a; background-blend-mode: overlay; }');
        janelaImpressao.document.write('body { margin-bottom: 2px; margin-top: 2px; font-family: Arial, sans-serif; display: flex; flex-direction: column; margin-left: 50px; margin-right: 50px; align-items: center; background-image: linear-gradient(purple, white); background-clip: padding-box; padding: 5px; overflow-y: auto; height: auto; line-height: 1.6;}');
        janelaImpressao.document.write('footer { height: 50px; font-size:10px; margin-top: 2px; margin-bottom: 50x; padding: 2px; background:radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%); background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%; background-color: #840b2a; background-blend-mode: overlay; color: white; width: 100%;}');
        janelaImpressao.document.write('table { width: 100%; table-layout: fixed; border-collapse: collapse; }');
        janelaImpressao.document.write('td { width: 50%; text-align: center; padding: 10px; vertical-align: top; }');        
        janelaImpressao.document.write('img { width: 70%; margin: 5px 0; border: 2px solid; padding: 5px; }'); // Reduzir o tamanho das imagens
        janelaImpressao.document.write('.orientacao { display: flex; flex-direction: line; align-items: flex-start; margin-left: 10px; margin-right: 15px; padding: 10px; border: solid outset 2px #ccc; background-color: transparent; }');
        janelaImpressao.document.write('.orientacao button { width: 300px; height: 50px; margin: 2px 15px; align-items: flex-start; padding: 5px; font-size: 16px; cursor: pointer; border: outset 5px rgb(151, 151, 181); border-radius: 5px; background: linear-gradient(45deg,#006782 40%, #0b1284 50%, #760ea1 60%, #83096e); color: white; transition: 0.2s; }');
        janelaImpressao.document.write('.orientacao button:hover { background-color: lightseagreen; transform: scale(1.1); }');
        janelaImpressao.document.write('.orientacao button:active { transform: scale(0.95); }');
        janelaImpressao.document.write('</style>');
        janelaImpressao.document.write('</head><body>');
        janelaImpressao.document.write('<header>');
        janelaImpressao.document.write('<h1 style="font-size: 40px;"><b>Triangularizando e Aprendendo</b></h1>'); // Aumentar o tamanho da fonte do cabeçalho
        janelaImpressao.document.write('</header>');
        janelaImpressao.document.write('<fieldset class="table" style="height: auto; text-align: center; color: white;">');
        janelaImpressao.document.write('<legend class="table" style="font-size: 30px; text-align: center; margin: auto; color: Black;"><b><u>Imagens Geradas no Jogo</u></b></legend>'); // Adiciona o título da tabela
        janelaImpressao.document.write('<table>');

        imagensSelecionadas.forEach((imagem, i) => {
            janelaImpressao.document.write('<tr>');
            
            // Primeira coluna
            janelaImpressao.document.write(`<td>
                <fieldset>
                    <legend>
                        <input type="checkbox"> Pol_${i + 1}
                    </legend>
                    <img src="${imagensSalvas.querySelector('img').src}">
                </fieldset>
            </td>`);
            
            // Segunda coluna
            if (imagensSelecionadas[i + 1]) {
                janelaImpressao.document.write(`<td>
                    <fieldset>
                        <legend>
                            <input type="checkbox"> Pol_${i + 2}
                        </legend>
                                        <img src="${imagensSalvas[i + 1].querySelector('img').src}">
                                    </fieldset>
                                </td>`);
                            }
});

janelaImpressao.document.write('</table>');
janelaImpressao.document.write('</fieldset>');
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
    }
});

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
        janelaImpressao.document.write('img { width: 70%; margin: 5px 0; border: 2px solid; padding: 5px; }'); // Reduzir o tamanho das imagens
        janelaImpressao.document.write('.orientacao { display: flex; flex-direction: line; align-items: flex-start; margin-left: 10px; margin-right: 15px; padding: 10px; border: solid outset 2px #ccc; background-color: transparent; }');
        janelaImpressao.document.write('.orientacao button { width: 300px; height: 50px; margin: 2px 15px; align-items: flex-start; padding: 5px; font-size: 16px; cursor: pointer; border: outset 5px rgb(151, 151, 181); border-radius: 5px; background: linear-gradient(45deg,#006782 40%, #0b1284 50%, #760ea1 60%, #83096e); color: white; transition: 0.2s; }');
        janelaImpressao.document.write('.orientacao button:hover { background-color: lightseagreen; transform: scale(1.1); }');
        janelaImpressao.document.write('.orientacao button:active { transform: scale(0.95); }');
        janelaImpressao.document.write('</style>');
        janelaImpressao.document.write('</head><body>');
        janelaImpressao.document.write('<header>');
        janelaImpressao.document.write('<h1 style="font-size: 40px;"><b>Triangularizando e Aprendendo</b></h1>'); // Aumentar o tamanho da fonte do cabeçalho
        janelaImpressao.document.write('</header>');
        janelaImpressao.document.write('checkbox')
        janelaImpressao.document.write('<fieldset class="table" style="height: auto; text-align: center; color: white;">');
        janelaImpressao.document.write('<ledend class="table" style="font-size: 30px; text-align: center; margin: auto; color: Black;"><b><u><u>Imagens Geradas no Jogo</u></u></b>'); // Adiciona o título da tabela
        janelaImpressao.document.write('<table>');
        for (let i = 0; i < imagensSelecionadas.length; i += 3) {
            janelaImpressao.document.write('<tr>');
            
            // Primeira coluna
            janelaImpressao.document.write(`<td>
                <fieldset>
                    <legend>
                        <input type="checkbox"> Pol_${i + 1}
                    </legend>
                    <img src="${imagensSelecionadas[i].querySelector('img').src}">
                </fieldset>
                </td>`);
            
            // Segunda coluna
            if (imagensSelecionadas[i + 1]) {
                janelaImpressao.document.write(`<td>
                    <img src="${imagensSelecionadas[i + 1].querySelector('img').src}">
                </td>`);
            } else {
                janelaImpressao.document.write('<td></td>');
            }
            
            // Terceira coluna
            if (imagensSelecionadas[i + 2]) {
                janelaImpressao.document.write(`<td>
                    <img src="${imagensSelecionadas[i + 2].querySelector('img').src}">
                </td>`);
            } else {
                janelaImpressao.document.write('<td></td>');
            }
            
            janelaImpressao.document.write('</tr>');
        }
        janelaImpressao.document.write('</table>');
        janelaImpressao.document.write('</legend>'); // Adiciona o título da tabela
        janelaImpressao.document.write('</fieldset>');
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
        
        janelaImpressao.print();
        janelaImpressao.onafterprint = () => janelaImpressao.close(); // Fechar a janela após a impressão
    } else {
        alert('Nenhuma imagem selecionada para impressão.');
    }
      
});

// Chame a função para carregar as imagens quando a página for carregada
window.onload = carregarImagens;