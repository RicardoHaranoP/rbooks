import Logo from '../logo'
import Icones from '../icones'
import OpcoesHeader from '../opcoesHeader';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`

  display: flex;
  justify-content: center;

`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <Logo />
            </Link>
            <OpcoesHeader />
            <Icones />
        </HeaderContainer>
    )
}

export default Header