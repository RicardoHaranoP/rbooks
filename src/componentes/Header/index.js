import Logo from '../logo'
import Icones from '../icones'
import OpcoesHeader from '../opcoesHeader';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`

  display: flex;
  justify-content: center;

    a {
  text-decoration: none;
  color: inherit;
  }
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'} class='link'>
                <Logo />
            </Link>
            <OpcoesHeader />
            <Icones />
        </HeaderContainer>
    )
}

export default Header