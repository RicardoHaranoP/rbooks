import Logo from '../logo'
import Icones from '../icones'
import OpcoesHeader from '../opcoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`

  display: flex;
  justify-content: center;

`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <Icones />
        </HeaderContainer>
    )
}

export default Header