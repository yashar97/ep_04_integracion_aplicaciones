import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './db/db.js'
import clienteRoutes from './routes/cliente.routes.js'
import platillosRouters from './routes/platillos.routes.js'

dotenv.config();
conectarDB();
const app = express();

app.use(express.json());
app.use('/api/clientes', clienteRoutes);
app.use('/api/platillos', platillosRouters);

const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en puerto: ${port}`));
