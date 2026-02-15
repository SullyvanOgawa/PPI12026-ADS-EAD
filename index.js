
import express from 'express';

const host = "0.0.0.0"; // requisições podem vir de todas as interfaces do host local 
const porta = 3000; // identifica única e exclusivamente uma apliação neste host

const app = express();

//Aqui todo o conteúdo do diretório Views/puvlic estará disponível na raiz do servidor
app.use(express.static('./Views/public'));

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
}) // js aceita fuunções como parâmetros de outras funções 


