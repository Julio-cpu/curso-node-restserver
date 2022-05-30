const cors = require('cors');
const express = require('express');

class Server {

    constructor( ){
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios';

        //Middlewares funciones que siempre se ejecutan cada que se levanta el servidor
        this.middlewares();
        //rutas de mi aplicaion

        this.routes();
    }

    middlewares(){

        //  CORS
        this.app.use( cors() );

        //Lectura y Parseo del Body
        this.app.use( express.json());//obtiene la info desde el front

        //Obtiene la info del directorio puiblico (index.html)
        this.app.use(express.static('public'));
    }

    routes(){
      
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        }); 
    }
}


module.exports = Server;