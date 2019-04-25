import React, { PureComponent } from 'react';

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

    if (result) {
      return (
        <div className="container shop-container">
          <div className="row">
            <div className="col-lg-12">
              <pre>
                {JSON.stringify(result, undefined, 2)}
              </pre>
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
