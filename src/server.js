import express from 'express';

//import userRouter from './routers/userRouter.js';
import ilhaBelaRouter from './routers/ilhaBelaRouter.js';

const app = express();
const port = 3000;

app.use(express.json());


app.use('/ilhaBela', ilhaBelaRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
