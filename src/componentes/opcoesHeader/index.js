
import styled from 'styled-components'

const OpcoesContainer = styled.ul`

    display: flex;
`

const Opcao = styled.li`
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const OpcoesHeader = () => {
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) =>(
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader