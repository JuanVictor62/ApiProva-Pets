import {cadastrarPet, consultarPet } from '../repository/petRepository.js'
import { Router } from 'express'
const server = Router();

server.post('/cadastropet', async (req, resp) => {
    try {
        const petInserir = req.body
        const petAdicionado = await cadastrarPet(petInserir)
        resp.send(petAdicionado)
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
})

server.get('/consultapet', async (req, resp) => {
    try {
        const resposta =  await consultarPet()
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
})

export default server;