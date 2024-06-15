

import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteFavoritos, getFavoritos } from '../servicos/favoritoServico';
import livroImg from '../imagens/livro.png'


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid orange;
        border-radius: 50px;
    }
`

const Titulo = styled.h2`
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos()
    setFavoritos(favoritosAPI)
  }

  async function deletarFavoritos(id) {
    await deleteFavoritos(id)
    alert (`Livro id ${id} removido dos favoritos`)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado onClick={() => deletarFavoritos(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg} alt='livro' />
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
