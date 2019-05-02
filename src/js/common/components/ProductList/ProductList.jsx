import React from 'react';
import ProductCard from '../Card/ProductCard';

const ProductList = (props) => {
  const { content } = props;

  console.log(props)
  return (
    <div className="container">
      <div className="row">
        {content.map((product, i) => {
          // Return the element. Also pass key
          const { price } = product.prices ? product.prices.price : 0;

          return (
            <ProductCard
              productLink={product.slug}
              imgAlt="Wine Cruise"
              productPrice={price}
              productName={product.title}
              imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg"
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProductList;
