const { response,request } = require('express');

const usuariosGet= (req, res=response) => {
     const params= req.query;
    res.json({
        msg: 'get API - controlador'
    });
  }

const usuariosPost= (req, res=response) => {
    const { nombre,edad }= req.body; //obtiene la informacion mandad desde el front

    
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut= (req, res=response) => {
    const id=req.params.id; //obtiene el id enviado en el URL del user.js routes
           res.json({
           msg: 'put API - controlador',
           id
     });
 }

const usuariosDelete=(req, res=response) => {
        res.json({
        msg: 'put API - controlador'
    });
}



  module.exports= {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosDelete
  }