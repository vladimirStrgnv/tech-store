import "./index.css";
import Logo from "../Logo";
import CrossSvg from "../../assets/cross";
import { NavLink } from "react-router-dom";
import React from "react";

interface IBurgerMenu {
  isActive: boolean;
  onClick: () => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ isActive, onClick }) => {
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
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "menu__link__active menu__link" : "menu__link"
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <NavLink
              to="/catalog"
              className={({ isActive, isPending }) =>
                isActive ? "menu__link__active menu__link" : "menu__link"
              }
            >
              Каталог
            </NavLink>
          </li>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <NavLink
              to="/basket"
              className={({ isActive, isPending }) =>
                isActive ? "menu__link__active menu__link" : "menu__link"
              }
            >
              Корзина
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
