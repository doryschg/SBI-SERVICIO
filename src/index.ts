import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import identidadRouter from './routes/identidad.routes';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(cors());

app.use(express.static('recursos'));
app.get('/', (req,res) => res.send('Express + TypeScript Server'));
app.use('/api/identidades',identidadRouter);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});