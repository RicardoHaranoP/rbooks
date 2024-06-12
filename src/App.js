
import Header  from './componentes/Header';
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components'

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;

`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
