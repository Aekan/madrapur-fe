/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductCard from 'common/components/Card/ProductCard';
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
            <h1 style={{ margin: '20px 0px' }}>Budapest River Cruise</h1>
          </div>
          <div className="col-lg-12">
          Welcome to Budapest, in the heart of Europe, in the middle of a fairy tale! Budapest is one of the most mystic, enchanted and romantic cities along the Danube river.
          As the capital of Hungary, this is a centre of everything you want to find in this welcoming country. At the same time, like the heart of Europe, you will find Budapest in a lovely, caothic way as in the East, a little precise, like on the West, as modern as the North with a little touch of the Souths.
          Join as and we will show you this fabolous side of the capital, while floating on the Danube river, underneath the Bridges, and you will be able to admire the panoramic view and the most famous places of Budapest.
          </div>
          <div className="col-lg-12" style={{ margin: '40px 0px 0px 0px', background: '#fffbfb' }}>
            <div className={styles.Featured}>Featured Products</div>
            <ProductCard productLink="/product/hungarian-folklore-and-dinner-cruise" imgAlt="Wine Cruise" productPrice="55" productName="HUNGARIAN FOLKLORE AND DINNER CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg" />
            <ProductCard productLink="/product/budapest-river-cruise-piano-battle-show" imgAlt="Wine Cruise" productPrice="55" productName="BUDAPEST RIVER CRUISE & PIANO BATTLE SHOW" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/bp-river-001-300x300.jpg" />
            <ProductCard productLink="/product/budapest-wine-tasting" imgAlt="Wine Cruise" productPrice="55" productName="WINE TASTING BUDAPEST WITH TASTE AND PLAY" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/12/wine-cruise-300x300.jpg" />
            <ProductCard productLink="/product/budapest-booze-pizza" imgAlt="Wine Cruise" productPrice="29" productName="BUDAPEST BOOZE & PIZZA CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/11/pizza-beer-cruises-budapest-300x300.jpg" />
          </div>
          <div className="col-lg-12" style={{ margin: '20px 0px' }}>
          During sightseeing on board, on the Danube you have the chance to admire wooded areas and hills of Buda with the unique Matthias Church and Fisherman’s Bastion.
          The other side of the Danube, called Pest you will see the nicest and most-known building of Budapest, Parliament as the third largest ones in the world designed by Imre Steindl.
          The wonderful panorama gilded by flowing bridges of Pest and Buda, from which four are also the parts of UNESCO, namely the Margaret Bridge, Chain Bridge, Elisabeth Bridge and Liberty Bridge.
          So it is not an exaggeration to say during enjoying Budapest river cruise, you must stare the breath-taking Danube panorama as a so-called incomparable scene throughout Europe.
          Budapest river cruise offered by Silver-line provides excellent choice to celebrate some special occasions for example a wedding anniversary, birthday, Valentine’s day or any other remarkable feasts, having a luxurious Budapest river cruise with tasty dinner, enjoying elegant live show.
          All our Budapest river cruise programs are available in winters and summers, too.
          Luxurious catamaran is heated in winters but air-conditioned in hot summers so we are always able to provide you to feel the maximum comfort.
          Join us and have an unforgettable journey!
          Seasonal Budapest river cruise, having various themes provide you to choose the perfect program from a simple sightseeing tour to a whole night dinner cruise with piano or folklore show and so much enjoyment. Each Budapest river cruise program guarantees unforgettable experiences for guests. Choose the most favourable Budapest river cruise program and be the part of a so special treat never to be forgotten.
          </div>
        </div>
      </div>
    )
  }
}

export default ExampleView
