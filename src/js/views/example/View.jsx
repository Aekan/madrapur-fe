/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as exampleActions } from '../../redux/modules/example'
import { exampleSelector } from '../../redux/selectors/exampleSelector'
import { ExampleWithError } from '../../common/components/Example'
import { ErrorBoundary } from '../../common/components/Utilities'

const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'))

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}

class HeaderBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: '' };
  }

  render() {
    return (
      <div>1</div>
    )
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class ExampleView extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props

    getAwesomeCode()
  }

  render() {
    return (
      <Fragment>
        <div>hi</div>
        <ErrorBoundary>
          <ExampleWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

export default ExampleView
