//Sirve para arrancar el servidor 

const app= require("./app")

//Setear el archivo de configuración / Importar la libreria config.env.
const dotenv= require("dotenv");
dotenv.config({path: 'back/config/config.env'})

//Construimos un método para que me verifique que estoy conectado al servidor.
const server= app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})