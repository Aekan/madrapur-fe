import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incCounter } from '../../redux/actions';
import { getCounter } from '../../redux/selectors';
import { ErrorBoundary } from '../../common/components/Utilities';

class HomeView extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
  }

  state = {
    counter: 0,
  }

  componentDidMount() {
    const { getInitialData } = this.props;

    getInitialData();
  }

  handleIncCounter = () => {
    // this.props.incCounter(state);
    this.setState({ counter: 0 })
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <Fragment>
            <ErrorBoundary>
              <h1>HOME</h1>
              <div>{counter}</div>
              <button type="button" className="inc-counter" onClick={this.handleIncCounter}>
                Increase counter
              </button>
            </ErrorBoundary>
          </Fragment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: getCounter(state),
});

const mapDispatchToProps = {
  incCounter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
