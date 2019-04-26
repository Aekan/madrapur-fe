import React from 'react';
import { Link } from 'react-router-dom';

const DropDownItem = (props) => {
  const { dropDownName } = props;

  return (
    <li className="nav-item dropdown">
      <Link to="#" data-toggle="dropdown" className="nav-link dropdown-toggle">{dropDownName}</Link>
      <ul className="dropdown-menu" style={{ padding: '0px' }}>
        {props.children}
      </ul>
    </li>
  )
}

export default DropDownItem;
