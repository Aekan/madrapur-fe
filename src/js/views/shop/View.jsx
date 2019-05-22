import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LazyLoading from '../../common/components/LazyLoading';
import { actions as shopActions } from '../../redux/modules/shop';
import { shopSelector } from '../../redux/selectors/shopSelector';
import { ErrorBoundary } from '../../common/components/Utilities';
import ProductContainer from '../../common/components/ProductContainer/ProductContainer';

import type { shopType } from '../../common/types/shop';

const LazyShop = LazyLoading(() => import('../../common/components/Shop/Shop'));
const LazyContainer = LazyLoading(() => import('../../common/components/ProductContainer/ProductContainer'));

const mapStateToProps = (state) => ({
  result: shopSelector(state),
});

const mapDispatchToProps = {
  ...shopActions,
};

@connect(mapStateToProps, mapDispatchToProps)
class ShopView extends Component {
  static propTypes: shopType = {
    items: PropTypes.array,
    addedItems: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    result: PropTypes.object,
  };

  static defaultProps: shopType = {
    items: [],
    addedItems: [],
    total: 0,
    currency: 'USD',
    result: {},
  };

  componentDidMount() {
    const { getShop } = this.props;

    getShop();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Fragment>
            <ErrorBoundary>
              <LazyShop {...this.props} />
            </ErrorBoundary>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default ShopView;