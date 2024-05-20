    require('dotenv').config();
    const cron = require('node-cron');
    const { PORT, SYNC_FORCE } = process.env;
    const port = process.env.PORT || 4000;
    const {server,serverSocket,io} = require('./src/app.js');
    const { conn, People } = require('./src/db.js');

    // Función para actualizar la edad
    async function startServer() {
        try {
            await conn.authenticate();
            console.log('Connection successfully established with the database...');

            // Sincronizar el modelo con la base de datos (si es necesario)
            await conn.sync({ alter: true }); //false queda para que deje de borrar el registro
            console.log('Performing maintenance tasks...');

            // Resto de la configuración y rutas de tu servidor
            server.listen(port, () => {
                console.log(`Server listening at ${port}`);
            });
        } catch (error) {
            console.error('Error starting server!', error);
        }
    }

    startServer();
    