/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from 'common/components/Card/ProductCard';
import { actions as cartActions } from '../../redux/modules/cart';
import { cartSelector } from '../../redux/selectors/cartSelector';
import { ExampleWithError } from '../../common/components/Example';
import { ErrorBoundary } from '../../common/components/Utilities';

const axios = require('axios');

const mapStateToProps = (state) => ({
  example: cartSelector(state),
})

const mapDispatchToProps = {
  ...cartActions,
}


@connect(mapStateToProps, mapDispatchToProps)
class ShopView extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props;
  }

  render() {
    const arr = [];
    const productList = arr.map(
      (item) => {
        return (
          <ProductCard
            name="HUNGARIAN FOLKLORE AND DINNER CRUISE"
            price="55"
            src="https://budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg"
            url="/product/hungarian-folklore-and-dinner-cruise"
          />
        )
      }
    );

    const response = axios.post(
      'http://api.modulus.hu/v1/Worker', {
        jsonrpc: '2.0',
        id: '1',
        method: 'product',
        params: [
          43,
        ],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    console.log(response);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            { productList }
            <ProductCard url="/product/hungarian-folklore-and-dinner-cruise" price="55" name="HUNGARIAN FOLKLORE AND DINNER CRUISE" src="https://budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg" />
            <ProductCard url="/product/budapest-river-cruise-piano-battle-show" price="55" name="BUDAPEST RIVER CRUISE & PIANO BATTLE SHOW" src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/bp-river-001-300x300.jpg" />
            <ProductCard url="/product/budapest-wine-tasting" price="55" name="WINE TASTING BUDAPEST WITH TASTE AND PLAY" src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/12/wine-cruise-300x300.jpg" />
            <ProductCard price="29" name="BUDAPEST BOOZE & PIZZA CRUISE" src="https://budapestrivercruise.co.uk/wp-content/uploads/2017/11/pizza-beer-cruises-budapest-300x300.jpg" />
            <ProductCard price="14" name="BUDAPEST DANUBE CRUISE – 75 MINUTES SIGHTSEEING" src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/bp-river-008-300x300.jpg" />
            <ProductCard price="83" name="BUDAPEST CHRISTMAS EVE CRUISE DINNER" src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/09/haj%C3%B3z%C3%A1s-budapesten-kar%C3%A1csonykor-300x300.jpg" />
            <ProductCard price="173" name="NEW YEARS EVE BUDAPEST DINNER CRUISE" src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/Budapest-newyearseve-300x300.jpg" />
            <ProductCard price="73" name="BUDAPEST VALENTINE’S DAY – DINNER WITH CRUISE" src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/07/romantic-budapest-cruise-300x300.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

export default ShopView;
