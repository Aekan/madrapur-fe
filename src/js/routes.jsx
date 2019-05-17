import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import LazyLoading from 'common/components/LazyLoading';
import styles from '../style/index.css';

const Header = LazyLoading(() => import('common/components/Header/Header'));
const Footer = LazyLoading(() => import('common/components/Footer/Footer'));

const HeaderWithRouter = withRouter((props) => <Header {...props} />);
const shopRender = withRouter((props) => <ShopPage {...props} />);

const ShopPage = (() => { return LazyLoading(() => import('views/shop')) })();

const PrivacyPolicy = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        Policy cucc
      </div>
    </div>
  </div>
);

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <div id="index" className={styles.content}>
      <Switch>
        <Route exact path="/" render={shopRender} />
        <Route exact path="/cruise-shop" component={shopRender} />
        <Route path="/product/:productId" component={shopRender} />
        <Route exact path="/cart" component={shopRender} />
        <Route path="/checkout/thankyou/:orderRef/:orderCurrency/:RC/:RT/:3dsecure/:date/:payrefno/:ctrl" component={shopRender} />
        <Route exact path="/checkout" component={shopRender} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="*" component={shopRender} />
      </Switch>
    </div>
    <Footer />
  </div>
);
