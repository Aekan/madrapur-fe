import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isBudapestCruises = pathname === '/budapest-cruises';
    const isBudapestWineTasting = pathname === '/product/budapest-wine-tasting';

    return (
      <header className={styles.globalHeader}>
        <div className="container">
          <div className="row">
            <div className="col">
              szociális iconok
            </div>
          </div>
        </div>
        <hr style={{ 'border-color': 'gray;' }} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <img alt="logo" src="https://silver-line.hu/wp-content/uploads/2017/05/budapest_river_cruise_logo.png" />
            </div>
            <div className="col">
              <ul>
                <li className={!isHome ? styles.active : ''}>
                  {
                    isHome
                      ? 'Home' : <Link to="/">Home</Link>

                  }
                </li>
                <li className={!isBudapestCruises ? styles.active : ''}>
                  {
                    isBudapestCruises
                      ? 'Budapest Cruises' : <Link to="/budapest-cruises">Budapest Cruises</Link>
                  }
                </li>
                <li className={!isBudapestWineTasting ? styles.active : ''}>
                  {
                    isBudapestWineTasting
                      ? 'Budapest Wine Tasting' : <Link to="/product/budapest-wine-tasting">Budapest Wine Tasting</Link>
                  }
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
