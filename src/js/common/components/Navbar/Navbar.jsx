import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.css';


const Navbar = (props) => {
  const { logoSRC } = props;
  const { logoAlt } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/"><img className={styles.logo} src={logoSRC} alt={logoAlt} /></Link>
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse bg-light" id="navbarNav">
        <ul className="navbar-nav">
          {props.children}
        </ul>
      </div>
    </nav>

  )
}

export default Navbar;
