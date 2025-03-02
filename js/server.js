const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'Imagens-Salvas'
app.use('/Imagens-Salvas', express.static(path.join(__dirname, 'Imagens-Salvas')));

// Endpoint para listar as imagens da pasta 'Imagens-Salvas'
app.get('/listar-imagens', (req, res) => {
    const pastaImagens = path.join(__dirname, 'Imagens-Salvas');
    fs.readdir(pastaImagens, (err, arquivos) => {
        if (err) {
            return res.status(500).send('Erro ao ler a pasta');
        }
        // Filtra apenas arquivos de imagem
        const imagens = arquivos.filter(arquivo => arquivo.endsWith('.jpg') || arquivo.endsWith('.jpeg') || arquivo.endsWith('.png'));
        res.json(imagens); // Envia a lista de imagens para o frontend
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});