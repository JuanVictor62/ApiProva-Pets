import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import petController from './controller/petController.js'

const server = express();

server.use(cors())
server.use(express.json())

server.use(petController)




server.listen(process.env.PORT, () => console.log(`API esta online na Porta ${process.env.PORT}`))