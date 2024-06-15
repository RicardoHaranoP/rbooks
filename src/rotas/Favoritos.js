

import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../servicos/favoritoServico';

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;

`

function Favoritos() {
  const [favoritos, setFavoritos ] = useState([])
 
  useEffect(() => {
    fetchFavoritos()
  }, [])
  
  async function fetchFavoritos () {
      const favoritosAPI = await getFavoritos()
      setFavoritos(favoritosAPI)
  }

  return (
    <AppContainer>
      {favoritos.map( element => (
        <p>{element.nome}</p>
      ))}
    </AppContainer>
  );
}

export default Favoritos;
