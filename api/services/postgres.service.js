const { Pool, Client } = require('pg')

const config = require('../config/index.config') 

class postgresService {

    constructor (){
        this.pool = this.iniciarPool()

    }

    iniciarPool(){
        return new Pool({
            user: config.PGUSER,
            host: config.PGHOST,
            database: config.PGDATABASE,
            password: config.PGPASSWORD,
            port : config.PGPORT
        })
    }

   async ejecutarQuery(sql, datos){
        return await this.pool.query(sql, datos)
    }

    async estaConectado(){
        return await this.pool.connect()
    }
}
module.exports = postgresService