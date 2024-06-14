

import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components'

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;

`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default Home;
