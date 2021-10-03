// Importar framework de express
const express = require('express')

// inicializamos el express
const app = express()

app.use(express.json())

// Importar rutas
const router_usuarios = require('./routers/usuarios.router')
app.use(router_usuarios)
// ejecutamos el API en el puerto 3000
const port = 3000
app.listen(port, () => {
  console.log(`API: http://localhost:${port}`)
})
