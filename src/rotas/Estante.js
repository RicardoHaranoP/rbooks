

import EstanteComp from '../componentes/Estante';
import styled from 'styled-components'

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;

`

function Estante() {
  return (
    <AppContainer>
      <EstanteComp/>
    </AppContainer>
  );
}

export default Estante;
