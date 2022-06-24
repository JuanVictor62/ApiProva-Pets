import './index.scss'
import { useState } from 'react'
import { cadastro, consultarPets } from '../api/pets';

export default function Principal(){
    const [nome, SetNome]= useState('');
    const [filtro, SetFiltro]= useState('');



    async function salvarClick(){
        try{
            const resp = await cadastro(nome);
            alert('Pet Cadastrado');
        }
        catch(err){
            console.log(err)
            alert('erro')
        }
    }

    async function filtrar(){
        const resp = consultarPets(filtro)
        return resp.data;
    }

    return(
        <main className='abc'>
            <div className='cab'>
                <p className='f1-titulo'>Cadastro de Pets</p>
            </div>
            <div className='help'>
                <h1> Insira o Nome do Pet abaixo:</h1>
                <input className='de' type='text' value={nome} onChange={e => SetNome(e.target.value)} />
                <button onClick={salvarClick} >Registrar</button>
            </div>

            <div>
                <h1>Consulta dos Pets</h1>
                {pet.map => 
                <h1>{item.nome}</h1>
                }
            </div>
        </main>
    )
}