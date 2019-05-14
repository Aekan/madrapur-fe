import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ProductCard.css'

const ProductCard = (props) => {
  const productLink = props.productLink ? props.productLink : '/';
  const { imgSrc } = props;
  const { imgAlt } = props;
  const { productName } = props;
  const { productPrice } = props;
  const { productCardOnClickCb } = props;

  console.log(props);

  return (
    <div
      className="col-sm-3"
      style={{ display: 'inline-block' }}
    >
      <Link className={styles.productLink} to={productLink} onClick={productCardOnClickCb}>
        <div className={styles.box}>
          <div style={{ overflow: 'hidden' }}>
            <img src={imgSrc} alt={imgAlt} width="100%" />
            <span className={styles.bookNow}>BOOK NOW</span>
          </div>
          <div className={styles.CardName}>
            {productName}
          </div>
          <div className={styles.CardPrice}>
            From:
            {' '}
            {productPrice}
            {' '}
            $
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
