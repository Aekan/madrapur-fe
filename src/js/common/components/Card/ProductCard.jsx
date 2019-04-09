import React from 'react'
import styles from './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div
      className="col-sm-3"
      style={{ display: 'inline-block' }}
    >
      <a className={styles.CardUrl} href={props.url}>
      <div className={styles.hasznald}>
        <div style={{ overflow: 'hidden' }}>
          <img src={props.src} alt="wine tasting cruise budapest" width="100%" />
        </div>
        <div className={styles.CardName}>
          {props.name}
        </div>
        <div className={styles.CardPrice}>
        From:
          {' '}
          {props.price}
          {' '}
$
        </div>
      </div>
      </a>
    </div>
  )
}

export default ProductCard;
