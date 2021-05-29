import express from 'express';
import bodyParser from 'body-parser';
//import dotEnv from 'dotenv';
import identidadController from './controllers/identidadHttp.controller';

//dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.get('/api/identidades', identidadController);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});