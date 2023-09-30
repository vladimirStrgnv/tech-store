import "./index.css";
import Logo from "../Logo";
import CrossSvg from "../../assets/cross";
import { Link } from "react-router-dom";

const BurgerMenu = ({ isActive, onClick }) => {
  return (
    <div className={isActive ? `menu active` : `menu`}>
      <div className={"menu__blur"} onClick={() => onClick()}></div>
      <div className={"menu__content"}>
        <div className={"menu__header"}>
          <CrossSvg setActive={onClick}></CrossSvg>
          <Logo></Logo>
        </div>
        <ul className={"menu__link-list"}>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <Link to="/" className={"menu__link"}>
              Главная
            </Link>
          </li>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <Link to="/catalog" className={"menu__link"}>
              Каталог
            </Link>
          </li>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <Link to="/basket" className={"menu__link"}>
              Корзина
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
