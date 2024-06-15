import { useEffect, useState } from 'react'
import { getLivros } from '../../servicos/livroServico'
import livroImg from '../../imagens/livro.png'

import styled from 'styled-components'


const EstanteContainer = styled.section`
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const ResultadoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    gap: 30px;
    flex-wrap: wrap;
`

const ResultadoPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    cursor: pointer;
    width: 40%;
    border-radius: 50px;

    p{
        width: 20%;
    }
    
    img {
        width: 80%;
    }

    &:hover {
        border: 1px solid orange;
    }
`


const Estante = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    },[])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }
    return (
        <EstanteContainer>
            <Titulo>Estante de livros</Titulo>
            <ResultadoContainer>
            {
                livros.map(livro => (
                    <ResultadoPesquisa>
                        <p>{livro.nome}</p>
                        <img src={livroImg} alt='livro' />
                    </ResultadoPesquisa>
                ))
            }
            </ResultadoContainer>
        </EstanteContainer >
    )
}

export default Estante