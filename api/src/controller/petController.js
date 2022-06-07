import {cadastrarPet, consultarPet } from '../repository/petRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/cadastropet', async (req, resp) => {
    try {
        const petInserir = req.body
        const petAdicionado = await cadastrarPet(petInserir)
        resp.send(petAdicionado)
        
    } catch (erro) {
        resp.status(400).send({
            error: erro.message
        })
    }
})

server.get('/consultapet', async (req, resp) => {
    try {
        const resposta =  await consultarPet()
        resp.send(resposta)
    } catch (erro) {
        resp.status(400).send({
            error: erro.message
        })
    }
})



export default server;