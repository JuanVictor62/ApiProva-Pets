import { con } from './connection.js'



export async function cadastrarPet(pet) {
    const comando = `INSERT INTO TB_PET (nm_pet)
                        VALUES (?)`

    const resposta = await con.query(comando, [pet.nome])
    pet.id = resposta.insertId;
    return pet
}

export async function consultarPet() {
    const comando = `
    SELECT id_pet			id,
        nm_pet			nome
    FROM TB_PET`

    const [resposta] = await con.query(comando)
    return resposta
}