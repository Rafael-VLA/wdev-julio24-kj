import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'

import routerEmpleado from './routes/empleado';

const app = express();

/* Config */
dotenv.config();

app.use(cors({
    origin: ["http://localhost:4200"],
    methods: ["POST", "GET", "PUT", "DELETE"]
}));

app.use(morgan("tiny"));
app.use(express.json()); // se le indica que debe manejar datos de tipo json
app.set("port", process.env.PORT || 5000);

/* Routes */
app.use('/api/v1/empleado', routerEmpleado);

/* Start */
const port = app.get("port");

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});