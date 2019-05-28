import React from 'react';
import ProductCard from '../Card/ProductCard';

const ProductList = (props) => {
  const { result, productCardOnClickCb } = props;

  // console.log(props, 'prodlist');

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
            thumbnail,
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
              imgSrc={thumbnail}
              onClick={productCardOnClickCb}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProductList;
