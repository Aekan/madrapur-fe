import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './CartMenu.css';

const CartMenu = () => {
  return (
    <div>
      <div className={styles.cartHolder}>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          Cart
        </Link>
      </div>
    </div>
  )
}

export default CartMenu;
