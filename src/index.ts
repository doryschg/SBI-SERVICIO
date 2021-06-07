import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotEnv from 'dotenv';
import identidadController from './controllers/identidadHttp.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/identidades', identidadController.buscarIdentidad);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});