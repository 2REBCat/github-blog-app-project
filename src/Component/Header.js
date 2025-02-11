import { Link } from 'react-router';
import './Header.css';

function Header(){
    return(
        <header>
            <div class="logo">
                <Link to="/">
                    <img src='logo.png' alt='LOGO'></img>
                </Link>
            </div>
            <nav class="global-nav">
                <Link to="/">Let's study</Link>
                <Link to="AboutMe">About me</Link>
            </nav>
        </header>
    );
}

export default Header;