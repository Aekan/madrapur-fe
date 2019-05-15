import React, { PureComponent } from 'react';
import Cookies from 'universal-cookie';
import { uuid } from '../Utilities/index';
import CheckoutContainer from '../CheckoutContainer/CheckoutContainer';
import CartContainer from '../CartContainer/CartContainer';
import ProductContainer from '../ProductContainer/ProductContainer';
import ProductList from '../ProductList/ProductList';
import HomePage from '../HomePage/HomePage';
import { createCart, addToCart, getCart } from '../../api/index';

/**
 * Shop
 * =============
 *
 * @extends PureComponent
 */
class Shop extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }

    this.onBookNow = this.onBookNow.bind(this);
    this.cookies = new Cookies();
  }

  componentDidMount() {
    const cookieCartId = this.cookies.get('cartId');

    if (!cookieCartId) {
      const cartId = uuid('cart');

      this.cookies.set('cartId', cartId, { path: '/' });

      createCart(cartId);
    } else {
      const items = JSON.parse(getCart(`'${cookieCartId}'`));

      this.setState({
        items,
      });
    }
  }

  onBookNow(bookedProduct) {
    const { items } = this.state;
    const { history } = this.props;

    console.log(this.state);
    console.log('onBookNow', bookedProduct);

    items.push(bookedProduct);

    this.setState({
      items,
    });

    // delete items.product;

    // addToCart(this.cookies.get('cartId'), JSON.stringify(items));

    history.push('/checkout');
  }

  // eslint-disable-next-line class-methods-use-this
  productCardOnClickCb(event) {
    console.log('cb', event);
  }

  render() {
    const CartRequestResponse = this.props;
    const result = (CartRequestResponse && CartRequestResponse.result) || null;
    const { match } = this.props;

    console.warn(match, 'alius');
    if (match && match.path && match.isExact && match.path === '/') {
      console.log('homepage', this.state);

      return (
        <div className="container-fluid home-container">
          <div className="row">
            <div className="col-lg-12">
              <HomePage {...this.props} />
            </div>
          </div>
        </div>
      );
    }

    if (match && match.path && match.isExact && match.path === '/cart') {
      console.log('cart', this.state.items);

      return (
        <div className="container cart-container">
          <div className="row">
            <div className="col-lg-12">
              <CartContainer {...this.props} />
            </div>
          </div>
        </div>
      );
    }

    if (match && match.path && match.isExact && match.path === '/checkout') {
      console.log('checkout', this.state.items);

      return (
        <div className="container checkout-container">
          <div className="row">
            <div className="col-lg-12">
              <CheckoutContainer {...this.props} {...this.state} />
            </div>
          </div>
        </div>
      );
    }

    if (match && match.params && match.params.productId && result) {
      return (
        <div className="container product-container">
          <div className="row">
            <div className="col-lg-12">
              <ProductContainer {...this.props} onBookNow={this.onBookNow} />
            </div>
          </div>
        </div>
      );
    }

    if (result && result.result) {
      return (
        <div className="container shop-container">
          <div className="row">
            <div className="col-lg-12">
              <ProductList key="productList" content={result.result} productCardOnClickCb={this.productCardOnClickCb} {...this.props} />
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
