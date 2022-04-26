import express from "express";
import cors from 'cors'

//importamos la conexion a la base de datos
import db from "./database/db.js";

// importamos nuestro enrutador
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/Blogs', routes)


try{
    await db.authenticate();
    console.log("Conexion exitosa a la DB")
}catch (e) {
    console.log(`El error de conexion es : ${e}`)
}

app.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

app.listen((process.env.PORT || 8080), ()=>{
    console.log("Server UP running in")
})

