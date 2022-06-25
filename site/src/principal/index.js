import './index.scss'
import { useState, useEffect } from 'react'
import { cadastro, consultarPets } from '../api/pets';

export default function Principal(){
    const [nome, SetNome]= useState('');
    const [pets, setPets] = useState([]);



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

    useEffect(()  => {
        CarregarPets();
    }, [])

    async function CarregarPets(){
        const resp = await consultarPets();
        setPets(resp); 
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

            <div className='asd'>
                <h1>Consulta dos Pets</h1>
                <tr>
                            <td>ID</td>
                            <td>Nome</td>
                        </tr>
                {pets.map(item => 
                <tbody>
                    <table>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>
                    </table>
                </tbody>
                )}
            </div>
        </main>
    )
}