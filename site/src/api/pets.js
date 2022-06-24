import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:5000"
})

export async function cadastro(nome){
    const resp = await api.post('/cadastropet', {
        nome:nome
    })
    return resp.data
}

export async function consultarPets(){
    const resp = await api.get('/consultapet')
    return resp.data
}