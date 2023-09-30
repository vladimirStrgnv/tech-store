import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

interface NavItemProps {
  text: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        isActive ? "nav-item-active" : ""
      }
    >
      <div className="nav-item">{text}</div>
    </NavLink>
  );
};

export default NavItem;