import './index.css';
import Logo from '../Logo';
import Nav from '../Nav';
import BurgerIcon from '../BurgerIcon';
import BurgerMenu from '../BurgerMenu';
import {useState} from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="header__wrapper">
        <div className="header__inner">
          <div className="header__nav-container">
            <Logo></Logo>
            <Nav></Nav>
          </div>
          <div className="header__contacts-container">
            <div className="header__phone-container">
              <a href="tel:+74951234567" className="header__phone-number">+7 (495) 123-45-67</a>
            </div>
          </div>
          <BurgerIcon onClick={toggleMenuActive}></BurgerIcon>
        </div>
      </div>
      <BurgerMenu isActive={menuActive} onClick={toggleMenuActive}></BurgerMenu>

    </header>
  );
};

export default Header;