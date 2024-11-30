import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from './db/db.js'
import clienteRoutes from './routes/cliente.routes.js'
import platillosRouters from './routes/platillos.routes.js'
import categoriaRoutes from './routes/categoria.routes.js'
import meseroRoutes from './routes/mesero.routes.js'
import ordenRoutes from './routes/orden.routes.js'

dotenv.config();
conectarDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/clientes', clienteRoutes);
app.use('/api/platillos', platillosRouters);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/meseros', meseroRoutes);
app.use('/api/ordenes', ordenRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en puerto: ${port}`));
