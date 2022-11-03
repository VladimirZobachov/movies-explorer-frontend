import logo from '../images/mouth.svg';
import Navigation from "./Navigation";
function Header(){
    return (
        <header className="header">
            <ul className="header__top-buttons">
                <li className="header__top-button header__top-button_logo header__top-button_left">
                    <a href="/" className="header__logo"><img src={logo} className="header__logo-mouth"/></a></li>
                    <Navigation/>
            </ul>
        </header>
    );
}
export default Header;