import logo from '../../imagens/logo.svg';
import './estilo.css'

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>RHarano</strong>Books</p>
        </div>
    )
};

export default Logo;