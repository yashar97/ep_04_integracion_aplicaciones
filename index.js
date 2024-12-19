import express from 'express'
import { Server } from 'socket.io'
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

const port = process.env.PORT;
const servidorHttp = app.listen(port, () => console.log(`Servidor corriendo en puerto: ${port}`));

const io = new Server(servidorHttp, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

app.use(express.json());
app.use(cors());
app.use('/api/clientes', clienteRoutes);
app.use('/api/platillos', platillosRouters);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/meseros', meseroRoutes);
app.use('/api/ordenes', ordenRoutes);

const mensajes = [];

io.on('connection', socket => {

    console.log('alguien se conecto');

    socket.on('nuevo mensaje', mensaje => {

        mensajes.push(mensaje);
        io.emit('respuesta', mensajes);

    });

});


