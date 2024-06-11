import Logo from '../logo'
import Icones from '../icones'
import OpcoesHeader from '../opcoesHeader';

const Header = () => {
    return (
        <header className="App-header">
            <Logo />
            <OpcoesHeader />
            <Icones />
        </header>
    )
}

export default Header