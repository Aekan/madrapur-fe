/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import * as OTPConst from '../Utilities/OTPSimplePayConstants.en';

class ThankYouContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      simpleParams: {
        '3dsecure': null,
        RC: null,
        RT: null,
        ctrl: null,
        date: null,
        orderCurrency: null,
        orderRef: null,
        payrefno: null,
      },
    }
  }

  componentDidMount() {
    const { match } = this.props;

    this.setState({
      simpleParams: match.params,
    });
  }

  render() {
    const { simpleParams } = this.state;

    console.warn('sparams', simpleParams);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 thankyou-form">
            {OTPConst.DEVELOPER_GUIDE}
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYouContainer;
