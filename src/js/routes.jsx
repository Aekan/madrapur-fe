/* eslint-disable object-curly-spacing */
import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import LazyLoading from 'common/components/LazyLoading';
import DayTimePicker from 'common/components/DayTimePicker/DayTimePicker';
import ProductContainer from 'common/components/ProductContainer/ProductContainer';
import styles from '../style/index.css';


// This is show case how you can lazy loading component
const ExampleRouteHandler = LazyLoading(() => import('views/example'))
const Header = LazyLoading(() => import('common/components/Header/Header'))
const Footer = LazyLoading(() => import('common/components/Footer/Footer'))


const BudapestCruises = () => (
  <ProductContainer
    sideBar={<DayTimePicker />}
    content="2"
  />
)

const BudapestWineTasting = () => (
  <ProductContainer sideBar={<DayTimePicker />} content="2" />
)

const BudapestPianoShow = () => (
  <ProductContainer id="budapest-river-cruise-piano-battle-show" sideBar="contact form" content="2" />
)

const EasterCruiseBudapest = () => (
  <ProductContainer id="easter-cruise-budapest" sideBar="contact form" content="2" />
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
  <ProductContainer
    sideBar={<DayTimePicker />}
    content=""
  />
)

const BudapestBoozeCruise = () => (
  <ProductContainer id="budapest-booze-cruize" sideBar="contact form" content="2" />
)

const ShopPage = (() => { return LazyLoading(() => import('views/shop')) })();

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
        <Route path="/product/budapest-cruises" component={BudapestCruises} />
        <Route path="/product/budapest-river-cruise-piano-battle-show" render={() => <BudapestPianoShow />} />
        <Route path="/product/easter-cruise-budapest" render={() => <EasterCruiseBudapest />} />
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
        <Route exact path="/cruise-shop" component={ShopPage} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
    <Footer />
  </div>
)
