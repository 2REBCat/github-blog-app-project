import { Link } from 'react-router';
import './Header.css';

function Header(){
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <img src='logo.png' alt='LOGO'></img>
                </Link>
            </div>
            <nav className="global-nav">
                <Link to="/">Let's study</Link>
                <Link to="/?menu=AboutMe">About me</Link>
            </nav>
        </header>
    );
}

export default Header;