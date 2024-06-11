import logo from '../../imagens/logo.svg';
import styled from 'styled-components'

const LogoContainer = styled.div`

    display: flex;
    font-size: 30px;


.logo-img {
    margin-right: 10px;
}
`
const LogoImg = styled.img`
    margin-right: 10px;
`

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo' ></LogoImg>
            <p><strong>RHarano</strong>Books</p>
        </LogoContainer>
    )
};

export default Logo;