const mongoose = require('mongoose');

// Environment Variable (Libreria → dotenv)
require('dotenv').config({path: 'config.env'});

const connDB = async () => {
    try {
        // Mongoose → Versión 5
        // mongoose.connect(Cadena_de_conexión_DB, config);
        
        // await mongoose.connect(process.env.DB_MONGO, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false
        // });
        
        // A partir de la versión 6 de Mongoose, ya no es necesario especificar
        // las opciones de configuración. La configuracion se maneja automáticamente.
        await mongoose.connect(process.env.DB_MONGO);
        console.log('DB Connection Successful...');
    } catch (error) {
        console.log('ERROR:', error);
        process.exit(1); // Stop APP
    }
}


// Exportar la función connDB para que sea visible desde otro archivos
module.exports = connDB;


