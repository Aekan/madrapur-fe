/* eslint-disable object-curly-spacing */
import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import LazyLoading from 'common/components/LazyLoading';
import ProductCard from 'common/components/Card/ProductCard';
import DayTimePicker from 'common/components/DayTimePicker/DayTimePicker';
import ProductContainer from 'common/components/ProductContainer/ProductContainer';
import styles from '../style/index.css';


// This is show case how you can lazy loading component
const ExampleRouteHandler = LazyLoading(() => import('views/example'))
const Header = LazyLoading(() => import('common/components/Header/Header'))
const Footer = LazyLoading(() => import('common/components/Footer/Footer'))


const BudapestCruises = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestWineTasting = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestPianoShow = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestFolkloreShow = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestValentinesDay = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2tetdtdt" />
)

const BudapestChristmasCruise = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestNewYearsCruise = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestSightseeingCruise = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestBoozeCruise = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const Shop = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <ProductCard productLink="/product/hungarian-folklore-and-dinner-cruise" imgAlt="Wine Cruise" productPrice="55" productName="HUNGARIAN FOLKLORE AND DINNER CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg" />
        <ProductCard productLink="/product/budapest-river-cruise-piano-battle-show" imgAlt="Wine Cruise" productPrice="55" productName="BUDAPEST RIVER CRUISE & PIANO BATTLE SHOW" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/bp-river-001-300x300.jpg" />
        <ProductCard productLink="/product/budapest-wine-tasting" imgAlt="Wine Cruise" productPrice="55" productName="WINE TASTING BUDAPEST WITH TASTE AND PLAY" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/12/wine-cruise-300x300.jpg" />
        <ProductCard productLink="/product/budapest-booze-pizza" imgAlt="Wine Cruise" productPrice="29" productName="BUDAPEST BOOZE & PIZZA CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/11/pizza-beer-cruises-budapest-300x300.jpg" />
        <ProductCard productLink="/product/budapest-sightseeing-river-cruise" imgAlt="Wine Cruise" productPrice="14" productName="BUDAPEST DANUBE CRUISE – 75 MINUTES SIGHTSEEING" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/bp-river-008-300x300.jpg" />
        <ProductCard productLink="/product/budapest-christmas-eve-cruise-dinner" imgAlt="Wine Cruise" productPrice="83" productName="BUDAPEST CHRISTMAS EVE CRUISE DINNER" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/09/haj%C3%B3z%C3%A1s-budapesten-kar%C3%A1csonykor-300x300.jpg" />
        <ProductCard productLink="/product/newyearsevebudapest-dinner-cruise" imgAlt="Wine Cruise" productPrice="173" productName="NEW YEARS EVE BUDAPEST DINNER CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/Budapest-newyearseve-300x300.jpg" />
        <ProductCard productLink="/product/budapest-valentines-day-dinner-with-cruise" imgAlt="Wine Cruise" productPrice="73" productName="BUDAPEST VALENTINE’S DAY – DINNER WITH CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/07/romantic-budapest-cruise-300x300.jpg" />
      </div>
    </div>
  </div>
)

const EventBudapest = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
       a
      </div>
    </div>
  </div>
)

const PrivacyPolicy = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        Policy cucc
      </div>
    </div>
  </div>
)

const BudapestHistorical = () => (
  <ProductContainer sideBar="contact form" content="2" />
)


// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <div id="index" className={styles.content}>
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/budapest-cruises" component={BudapestCruises} />
        <Route path="/product/budapest-river-cruise-piano-battle-show" component={BudapestPianoShow} />
        <Route path="/product/hungarian-folklore-and-dinner-cruise" component={BudapestFolkloreShow} />
        <Route path="/product/budapest-wine-tasting" component={BudapestWineTasting} />
        <Route path="/product/budapest-valentines-day-dinner-with-cruise" component={BudapestValentinesDay} />
        <Route path="/product/budapest-christmas-eve-cruise-dinner" component={BudapestChristmasCruise} />
        <Route path="/product/newyearsevebudapest-dinner-cruise" component={BudapestNewYearsCruise} />
        <Route path="/product/budapest-sightseeing-river-cruise" component={BudapestSightseeingCruise} />
        <Route path="/product/budapest-booze-pizza" component={BudapestBoozeCruise} />
        <Route path="/product/budapest-szentendre-river-cruise" component={BudapestHistorical} />
        <Route path="/event-venues-in-budapest" component={EventBudapest} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/cruise-shop" component={Shop} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
    <Footer />
  </div>
)
