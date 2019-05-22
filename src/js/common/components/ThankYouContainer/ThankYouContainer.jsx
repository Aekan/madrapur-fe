/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import * as OTPConst from '../Utilities/OTPSimplePayConstants.en';
import { getOrder } from '../../api/index';
import styles from './ThankYouContainer.css';

class ThankYouContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.getOrderCb = this.getOrderCb.bind(this);

    this.state = {
      orderRef: 0,
      status: '',
      data: {},
      reservationIds: [1],
      transactionId: '',
      transactionDate: '',
    }
  }

  componentDidMount() {
    const { match } = this.props;

    getOrder(match.params.orderRef, this.getOrderCb);

    this.setState({ ...match.params });
  }

  getOrderCb(data) {
    console.warn('getOrder', data);

    const stateData = data;
    stateData.reservationIds = JSON.parse(stateData.reservationIds);
    stateData.renderElement = '';

    if (stateData.status === 'WAITING_FOR_IPN' || stateData.status === 'CONFIRMED_IPN') {
      stateData.renderElement = this.renderCardSuccess(stateData.transactionId, stateData.reservationIds, stateData.transactionDate);
    } else if (stateData.status === 'SUCCESSFUL_WIRE') {
      stateData.renderElement = this.renderWireSuccess(stateData.transactionId, stateData.reservationIds, stateData.transactionDate);
    } else {
      stateData.renderElement = this.renderFailure(stateData.transactionId, stateData.reservationIds, stateData.transactionDate);
    }

    this.setState({ ...stateData });

    console.log('rend', stateData.status === OTPConst.WAITING_FOR_IPN);
    console.log('stét', this.state);
  }

  renderFailure(transactionId, reservationIds, transactionDate) {
    return (
      <div className={styles.paymentSuccess}>
        <h1>{OTPConst.UNSUCCESSFUL_TRANSACTION}</h1>
        <div>{OTPConst.UNSUCCESSFUL_NOTICE}</div>
        <div>{OTPConst.PAYREFNO}: {transactionId}</div>
        <div>{OTPConst.ORDER_ID}: {reservationIds.map((id) => { return id; })}</div>
        <div>{OTPConst.DATE}: {transactionDate}</div>
      </div>
    );
  }

  renderCardSuccess(transactionId, reservationIds, transactionDate) {
    return (
      <div className={styles.paymentSuccess}>
        <h1>{OTPConst.SUCCESSFUL_CARD_AUTHORIZATION}</h1>
        <div>{OTPConst.PAYREFNO}: {transactionId}</div>
        <div>{OTPConst.ORDER_ID}: {reservationIds.map((id) => id)}</div>
        <div>{OTPConst.DATE}: {transactionDate}</div>
      </div>
    );
  }

  renderWireSuccess(transactionId, reservationIds, transactionDate) {
    return (
      <div className={styles.paymentSuccess}>
        <h1>{OTPConst.SUCCESSFUL_WIRE}</h1>
        <div>{OTPConst.PAYREFNO}: {transactionId}</div>
        <div>{OTPConst.ORDER_ID}: {reservationIds.map((id) => id)}</div>
        <div>{OTPConst.DATE}: {transactionDate}</div>
      </div>
    );
  }

  render() {
    const { renderElement } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className={`col-sm-12 ${styles.thankyouForm}`}>
            {renderElement}
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYouContainer;
