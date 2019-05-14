import React from 'react';
import ProductCard from '../Card/ProductCard';

const ProductList = (props) => {
  const { result, productCardOnClickCb } = props;

  console.log(props, 'prodlist');

  return (
    <div className="container">
      <div className="row">
        {result.result.map((product, i) => {
          // Return the element. Also pass key
          const {
            slug,
            title,
            id,
            prices,
          } = product;

          const price = prices && prices[0] ? prices[0].price : 0;

          return (
            <ProductCard
              {...props}
              productId={id}
              productLink={slug}
              imgAlt="Wine Cruise"
              key={slug}
              productPrice={price}
              productName={title}
              imgSrc="https://regi.budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg"
              onClick={productCardOnClickCb}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProductList;
