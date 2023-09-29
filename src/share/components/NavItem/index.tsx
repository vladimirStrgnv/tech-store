import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

interface NavItemProps {
    text: string,
    link: string
}

const NavItem: React.FC<NavItemProps> = ({ text, link }) => {
  return (
    <div className="nav-item">
      <NavLink
        to={link}
        className={({ isActive, isPending }) =>
          isActive
            ? "nav-item-active"
            : ""
        }
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavItem;