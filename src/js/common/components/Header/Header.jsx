import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from 'common/components/SocialFollow/socialFollow';
import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isBoozeCruise = pathname === '/product/budapest-booze-pizza';
    const isSightSeeingCruise = pathname === '/product/budapest-sightseeing-river-cruise';
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
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <SocialFollow />
            </div>
            <div className="col">
              <span>Login</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#">
                {' '}
                <Link to="/"><img alt="logo" src="https://silver-line.hu/wp-content/uploads/2017/05/budapest_river_cruise_logo.png" /></Link>
              </a>
              <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse bg-light" id="navbarNav">
                <ul className="navbar-nav">
                  <li className={`nav-item ${isHome ? styles.active : 'tgzhu'}`}>
                    <Link className="nav-link" to="/">HOME</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">
BUDAPEST CRUISES
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu" style={{ padding: '0px' }}>
                      <li className={`dropdown-item ${isSightSeeingCruise ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/budapest-sightseeing-river-cruise">BUDAPEST SIGHTSEEING RIVER CRUISE</Link>
                      </li>
                      <li className={`dropdown-item ${isBoozeCruise ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/budapest-booze-pizza">BUDAPEST BOOZE CRUISE & PIZZA</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">
DINNER CRUISES
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu" style={{ padding: '0px' }}>
                      <li className={`dropdown-item ${isBudapestPianoShow ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/budapest-river-cruise-piano-battle-show">DINNER CRUISE & PIANO SHOW</Link>
                      </li>
                      <li className={`dropdown-item ${isBudapestFolklore ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/hungarian-folklore-and-dinner-cruise">DINNER CRUISE & HUNGARIAN FOLKLORE</Link>
                      </li>
                      <li className={`dropdown-item ${isBudapestWineTasting ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/budapest-wine-tasting">BUDAPEST WINE TASTING</Link>
                      </li>
                      <li className={`dropdown-item ${isBudapestValentinesDay ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/budapest-valentines-day-dinner-with-cruise">BUDAPEST VALENTINE'S DAY CRUISE</Link>
                      </li>
                      <li className={`dropdown-item ${isBudapestChristmas ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/budapest-christmas-eve-cruise-dinner">BUDAPEST CHRISTMAS CRUISE</Link>
                      </li>
                      <li className={`dropdown-item ${isBudapestNewYearsCruise ? styles.active : ''}`}>
                        <Link className="nav-link" to="/product/newyearsevebudapest-dinner-cruise">BUDAPEST NEW YEAR'S CRUISE</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`nav-item ${isHistorical ? styles.active : ''}`}>
                    <Link className="nav-link" to="/product/budapest-szentendre-river-cruise">HISTORICAL TOUR</Link>
                  </li>
                  <li className={`nav-item ${isEventBudapest ? StyleSheet.active : ''}`}>
                    <Link className="nav-link" to="/event-venues-in-budapest">EVENT VENUES IN BUDAPEST</Link>
                  </li>
                  <li className={`nav-item ${isShop ? styles.active : ''}`}>
                    <Link className="nav-link" to="/cruise-shop">SHOP</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">
CONTACT
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu" style={{ padding: '0px' }}>
                      <li className={`dropdown-item ${isPrivacy ? styles.active : ''}`}>
                        <Link className="nav-link" to="/privacy-policy">PRIVACY POLICY</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>git submodule foreach --recursive git checkout .


        </div>
      </header>
    );
  }
}

export default Header;
