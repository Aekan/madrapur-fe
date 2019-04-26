import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { itemLink } = props;
  const { itemName } = props;


  return (
    <li className="nav-item">
      <Link className="nav-link" to={itemLink}>
        {itemName}
      </Link>
    </li>
  )
}

export default NavItem;
