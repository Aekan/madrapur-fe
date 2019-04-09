import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ProductCard.css'

const ProductCard = (props) => {
let productLink = props.productLink ? props.productLink : '/';
  return (
    <div
      className="col-sm-3"
      style={{ display: 'inline-block' }}
    >
      <Link className={styles.productLink} to={productLink}>
        <div className={styles.box}>
          <div style={{ overflow: 'hidden' }}>
            <img src={props.imgSrc} alt={props.imgAlt} width="100%" />
            <span className={styles.bookNow}>BOOK NOW</span>
          </div>
          <div className={styles.CardName}>
            {props.productName}
          </div>
          <div className={styles.CardPrice}>
        From:
            {' '}
            {props.productPrice}
            {' '}
$
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
