import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isBoozeCruise = pathname === '/product/budapest-booze-pizza';
    const isSightSeeingCruise = pathname === '/budapest-sightseeing-river-cruise';
    const isBudapestWineTasting = pathname === '/product/budapest-wine-tasting';
    const isBudapestPianoShow = pathname === '/product/budapest-river-cruise-piano-battle-show';
    const isBudapestFolklore = pathname === '/product/hungarian-folklore-and-dinner-cruise';
    const isBudapestValentinesDay = pathname === '/product/budapest-valentines-day-dinner-with-cruise';
    const isBudapestChristmas = pathname === '/product/budapest-christmas-eve-cruise-dinner';
    const isBudapestNewYearsCruise = pathname === '/product/newyearsevebudapest-dinner-cruise';
    const isHistorical = pathname === '/product/budapest-szentendre-river-cruise';
    const isEventBudapest = pathname === '/event-venues-in-budapest';
    const isPrivacy = pathname === '/privacy-policy'
    const isShop = pathname === '/shop';

    return (
      <header className={styles.globalHeader}>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              szociális iconok
            </div>
            <div className="col" />
            <div className="col-sm-2">
              <span>Login</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
        <hr style={{ 'border-color': 'gray;' }} />
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <img className={styles.logo} alt="logo" src="https://silver-line.hu/wp-content/uploads/2017/05/budapest_river_cruise_logo.png" />
            </div>
            <div className="col">
              <ul>
                <li className={!isHome ? styles.active : ''}>
                  {
                    isHome
                      ? 'Home' : <Link to="/">Home</Link>

                  }
                </li>
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown" className="dropdown-toggle">Budapest Cruises<b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li className={!isSightSeeingCruise ? styles.active : ''}>
                      {
                        isSightSeeingCruise
                          ? 'Budapest Sightseeing River Cruise' : <Link to="/budapest-sightseeing-river-cruise">Budapest Sightseeing River Cruise</Link>
                      }
                    </li>
                    <li className={!isBoozeCruise ? styles.active : ''}>
                      {
                        isBoozeCruise
                          ? 'Budapest Booze Cruise & Pizza' : <Link to="/product/budapest-booze-pizza">Budapest Booze Cruise & Pizza</Link>
                      }
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown" className="dropdown-toggle">Dinner cruises<b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li className={!isBudapestPianoShow ? styles.active : ''}>
                      {
                          isBudapestPianoShow
                            ? 'Dinner cruise & piano show' : <Link to="/product/budapest-river-cruise-piano-battle-show">Dinner cruise & piano show</Link>
                      }
                    </li>
                    <li className={!isBudapestFolklore ? styles.active : ''}>
                      {
                          isBudapestFolklore
                            ? 'Dinner cruise & hungarian folklore' : <Link to="/product/hungarian-folklore-and-dinner-cruise">Dinner cruise & hungarian folklore</Link>
                      }
                    </li>
                    <li className={!isBudapestWineTasting ? styles.active : ''}>
                      {
                          isBudapestWineTasting
                            ? 'Budapest Wine Tasting' : <Link to="/product/budapest-wine-tasting">Budapest Wine Tasting</Link>
                      }
                    </li>
                    <li className={!isBudapestValentinesDay ? styles.active : ''}>
                      {
                        isBudapestValentinesDay
                          ? 'Budapest Valentine\'s Day cruise' : <Link to="/product/budapest-valentines-day-dinner-with-cruise">Budapest Valentine's Day cruise</Link>
                      }
                    </li>
                    <li className={!isBudapestChristmas ? styles.active : ''}>
                      {
                        isBudapestChristmas
                          ? 'Budapest Christmas Cruise' : <Link to="/product/budapest-christmas-eve-cruise-dinner">Budapest Christmas Cruise</Link>
                      }
                    </li>
                    <li className={!isBudapestNewYearsCruise ? styles.active : ''}>
                      {
                        isBudapestNewYearsCruise
                          ? 'Budapest New years\'s Cruise' : <Link to="/product/newyearsevebudapest-dinner-cruise">Budapest New Years's Cruise</Link>
                      }
                    </li>
                  </ul>
                </li>
                <li className={!isHistorical ? styles.active : ''}>
                  {
                    isHistorical
                      ? 'Historical tour' : <Link to="/product/budapest-szentendre-river-cruise">Historical tour</Link>
                  }
                </li>
                <li className={!isEventBudapest ? StyleSheet.active : ''}>
                  {
                    isEventBudapest
                      ? 'Event Venues in Budapest' : <Link to="/event-venues-in-budapest">Event Venues in Budapest</Link>
                  }
                </li>
                <li className={!isShop ? styles.active : ''}>
                  {
                    isShop
                      ? 'Shop' : <Link to="/shop">Shop</Link>
                  }
                </li>
                <li className="dropdown">
                  <a href="/#" data-toggle="dropdown" className="dropdown-toggle">
                    Contact
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className={!isPrivacy ? styles.active : ''}>
                      {
                          isPrivacy
                            ? 'Privacy policy' : <Link to="/privacy-policy">Privacy policy</Link>
                      }
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
