import Input from '../Input'
import styled from 'styled-components'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #f0ffbf 35%, #e8e51b 165%);
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

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Pesquisa = () => {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro</Subtitulo>
            <Input 
                placeholder="proxima leitura"
            />
        </PesquisaContainer>
    )
}

export default Pesquisa