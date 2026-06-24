import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
//import routes from './src/routes/index.js';
import routes from './routes/index.js';
//import apiRoutes from './routes/index.js';


const app = express();

app.use(cors());           // Permite que React se conecte
app.use(morgan('dev'));    // Muestra: GET /products 200 en consola
app.use(express.json());   // Entiende los objetos JSON que enviamos

app.use('/api', routes);

export default app;