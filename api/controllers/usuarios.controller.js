
let usuarios = []

const postgresService = require('../services/postgres.service')
const _pg = new postgresService()

const crearUsuario = async (usuario) => {
    const sql = 'INSERT INTO public.usuarios (nombre, id, apellidos, rol, clave) VALUES($1, $2, $3, $4, $5);'
    const datos = [usuario.nombre, usuario.id, usuario.apellidos, usuario.rol , usuario.clave]

    
    usuarios.push(usuario)
    return await _pg.ejecutarQuery(sql,datos);
}

const consultarUsuario = () => {
    return usuarios;

}

const modificarUsuario = (usuario) => {
    
    let id = usuario.id
    let posicion = usuarios.findIndex(x=>x.id == id)
    return usuarios.splice(posicion, 1, usuario)

}

const eliminarUsuario = (id) => {
    let posicion = usuarios.findIndex(x => x.id == id)
    return usuarios.splice(posicion, 1)

}

const login = (credenciales) => {
    return "login"

}

module.exports= { login, modificarUsuario, eliminarUsuario, crearUsuario, consultarUsuario}