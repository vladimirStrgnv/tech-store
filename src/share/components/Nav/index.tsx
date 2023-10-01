import NavItem from "../NavItem";
import BasketNavItem from "../BasketNavItem";
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
        <BasketNavItem></BasketNavItem>
      </div>

    </ul>
  );
};

export default Nav;
