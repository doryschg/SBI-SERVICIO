import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import identidadRouter from './routes/identidad.routes';
const app = express();
dotEnv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json({
  inflate: true
}));

app.get('/', (req,res) => res.send(req.query));
app.post('/', (req,res) => res.send(req.body));

app.use('/api/identidades',identidadRouter);

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
