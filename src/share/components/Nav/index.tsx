import NavItem from "../NavItem";
import "./index.css";

const Nav = () => {
  return (
    <ul className="nav">
      <div className="nav__item">
        <NavItem text="Главная" link="/"></NavItem>
      </div>
      <div className="nav__item">
        <NavItem text="Каталог" link="/catalog"></NavItem>
      </div>
      <div className="nav__item">
        <NavItem text="Корзина" link="/basket"></NavItem>
      </div>
    </ul>
  );
};

export default Nav;
