import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import identidadController from './controllers/identidadHttp.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(cors());

app.use(express.static('recursos'));

app.get('/api/identidades', identidadController.buscarIdentidad);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});