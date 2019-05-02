import React, { PureComponent } from 'react';
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization,
} from 'react-shopping-cart';
import { ErrorBoundary } from '../../common/components/Utilities';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

class CheckoutView extends PureComponent {
  static defaultProps = {
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <CartComponent
            products={
              products
              // Provide your own product's Object(Look at Products)
            }
            onUpdateProduct={
              this.updateProduct
              // Update something
            }
            getLocalization={
              getCartLocalization
            }
            currency="GBP"
            onRemoveProduct={
              this.removeProduct
              // Remove something
            }
            checkoutButton={
              checkoutButtonElement
            }
            isCartEmpty={
              false
            }
          />
        </div>
      </div>
    );
  }
}

export default CheckoutView;
