const { Router } = require('express');

//Objeto donde definimos rutas del servidor
const router = Router();

//Solicitud para obtener el modelo de negocio

const Negocio = require('../models/negocio-model');

//Ruta para cargar la lista de negocios
router.get('/api/negocios', async (req,res)=>{

    //Buscar todos los negocios dentro de la base de datos
    const negocios = await Negocio.find();
    res.json( {negocios} );
});

//Ruta para crear negocio
router.get('/api/negocios-model/create', async (req,res)=>{

        await Negocio.create({
            
            nombreNegocio: 'BBC',
            categoria: 'Belleza',
            direccionFisica: '7av 3calle',
            avatar: 'img.jpg'

        });

    res.json({message:'Negocio Creado exitosamente'});

});


module.exports = router
