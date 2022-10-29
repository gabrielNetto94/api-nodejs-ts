import express from 'express'
import config from 'config'
import routes from './routes'
import db from '../config/db'
import Logger from '../config/logger'
import morganMiddlware from './middleware/morganMiddlware'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.DEFAULT_PORT || 3001

//middlware para log das rotas
app.use(morganMiddlware)

//middleware JSON
app.use(express.json())

//utiliza as rotas do sistema
app.use('/api', routes)

app.get("/api", (req, res) => {
    return res.json({message: "api working"})
})

app.listen(port, async () => {

    //conecta banco
    // await db()

    Logger.info(`server rodando porta ${port}...`)
})