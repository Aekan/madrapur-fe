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
  <ProductContainer
    sideBar={<DayTimePicker />}
    content="Budapest Sightseeing River Cruise
  Sightseeing cruise in Budapest is one of the most popular program on the Danube
  Each tourist would gladly desire to visit the whole Budapest, its significant parts and spectacles.
  Reach all monuments by a Budapest river cruise on the Danube to be able to explore the magnificent panorama for which millions of guests are travelling to here year by year.
  The amazing panoramic view with its natural and historical uniqueness observed from the ship provides you a never-to-be-forgotten event.
  When and where are you able to reach us?
  Budapest river cruise is available any time of the day starting from 11.00 am until 10.30 pm on a newly renovated,
  kept maintained and convenient ship leaving from the Dock 11 near Elisabeth Bridge at Pest side.
  It is no exaggeration to mention that sightseeing cruise is a perfect occasion for admiring both sides of Budapest as Pest and Buda as well their gorgeous views,
  Fisherman’s Bastion, Buda Hill, the Hungarian Parliament, Gellért Hill, National Theatre,
  Royal Palace and the famous Széchenyi Chain Bridge – being the parts of UNESCO World Heritage - lit up at night as an illustration.
  So choose the 75-minute Budapest river cruise on the Danube, being available in several languages provided by audio guide,
  sit on a comfort place and learn some interesting facts about our lovely town.
  You must be hungry meanwhile the boat keep you rocking thus having the possibility taste delicious street foods – like hot dog,
  panini (Mortadella Classic, Parma Grande, Greek Chicken, BBQ Pork), piadina (Caprese, Quattro Formaggi, al’Prosciutto),
  Belga waffeln or Chocolate fondant - with champagne, house wines or soft drinks, too."
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

const shopRender = () => {
  return <ShopPage />;
}

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <div id="index" className={styles.content}>
      <Switch>
        <Route exact path="/" render={shopRender} />
        <Route path="/product/:id" component={ShopPage} />
        <Route path="/event-venues-in-budapest" component={EventBudapest} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/cruise-shop" component={ShopPage} />
        <Route path="*" component={ShopPage} />
      </Switch>
    </div>
    <Footer />
  </div>
)
