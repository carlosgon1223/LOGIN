const express = require('express');
const router = express.Router()

const controller = require('../controllers/usuarios.controller')

// Crear usuario
router.post('/usuarios', async (req, res)=>{

    try {
        let usuario = req.body
        let info = await controller.crearUsuario(usuario)
    return res.send(info)
        
    } catch (error) {
        return res.send(error)
        
    }
    
})
// Modificar usuario
router.put('/usuarios', (req, res)=>{
    let usuario = req.body
    let info = controller.modificarUsuario(usuario)
    return res.send(info)
})
//Eliminar usuario
router.delete('/usuarios/:id', (req, res)=>{
    let id = req.params.id

    let info = controller.eliminarUsuario(id)
    return res.send(info)
})
// Consultar usuario
router.get('/usuarios', (req, res)=>{
    let info = controller.consultarUsuario()
    return res.send(info)
})
//Login
router.post('/login', (req, res)=>{
    let info = controller.login()
    return res.send(info)
})

module.exports = router