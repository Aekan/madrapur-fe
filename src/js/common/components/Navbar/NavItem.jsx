import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  const { itemLink } = props;
  const { itemName } = props;


  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={itemLink}>
        {itemName}
      </NavLink>
    </li>
  );
}

export default NavItem;
