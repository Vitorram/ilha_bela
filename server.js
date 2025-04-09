import express from 'express';
import cors from 'cors';
import routes from './routers/ilhabelaRoutes.js'; 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
