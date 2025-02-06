import './Header.css';

function Header(){
    return(
        <header>
            <div class="logo">
                <img src='logo.png' alt='LOGO'></img>
            </div>
            <nav class="global-nav">
                <a href="#">Let's study</a>
                <a href="#">About me</a>
            </nav>
        </header>
    );
}

export default Header;