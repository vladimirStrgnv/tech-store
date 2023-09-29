import './index.css';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;