import React, { PureComponent } from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import ProductList from '../ProductList/ProductList';

/**
 * Shop
 * =============
 *
 * @extends PureComponent
 */

class Shop extends PureComponent {
  render() {
    const CartRequestResponse = this.props;
    const result = (CartRequestResponse && CartRequestResponse.result) || null;

    console.warn(result, 'alius');
    if (result) {
      return (
        <div className="container shop-container">
          <div className="row">
            <div className="col-lg-12">
              {(result.result).map((products) => {
                console.log('Entered', products);
                // Return the element. Also pass key
                return (<ProductList key="productList" content={products} />)
              })}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container shop-container-error">
        <div className="row">
          <div className="col-lg-12">
            <pre>
              Error.
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
