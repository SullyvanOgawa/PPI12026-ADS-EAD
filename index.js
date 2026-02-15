import express from 'express';

const host = "0.0.0.0"; // requisições podem vir de todas as interfaces do host local 
const porta = 3000; // identifica única e exclusivamente uma apliação neste host

const app = express();

app.get('/meioponto', (requisicao, resposta)=>{
    resposta.send("<h1>0,5</h1>");
});

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
}) // js aceita fuunções como parâmetros de outras funções 