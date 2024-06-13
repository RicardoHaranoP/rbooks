import Input from '../Input'
import { livros } from './dadosPesquisa'
import styled from 'styled-components'
import { useState } from 'react'

const PesquisaContainer = styled.section`
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

const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState(livros)
    
    return (
        <PesquisaContainer>
            <Titulo>Encontre seu livro</Titulo>
            <Input
                placeholder="Digite sua próxima leitura"
                onBlur={event => {
                    const textoPesquisa = event.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoPesquisa))
                    setLivrosPesquisados(resultadoPesquisa)
                }}

            />
            <ResultadoContainer>
            {
                livrosPesquisados.map(livro => (
                    <ResultadoPesquisa>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt='livro'/>
                    </ResultadoPesquisa>
                ))
            }
            </ResultadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa