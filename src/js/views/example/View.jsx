/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unused-prop-types */
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
import styles from './MainPage.css';

const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'))

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Budapest River Cruise</h1>
          </div>
          <div className="col-lg-12">
          Welcome to Budapest, in the heart of Europe, in the middle of a fairy tale! Budapest is one of the most mystic, enchanted and romantic cities along the Danube river.
          As the capital of Hungary, this is a centre of everything you want to find in this welcoming country. At the same time, like the heart of Europe, you will find Budapest in a lovely, caothic way as in the East, a little precise, like on the West, as modern as the North with a little touch of the Souths.
          Join as and we will show you this fabolous side of the capital, while floating on the Danube river, underneath the Bridges, and you will be able to admire the panoramic view and the most famous places of Budapest.
          </div>
        </div>
      </div>
    )
  }
}

export default ExampleView
