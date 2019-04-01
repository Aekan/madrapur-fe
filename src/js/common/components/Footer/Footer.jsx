import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';


class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      titleOne: 'Follow us',
      titleTwo: 'Departure Place',
      titleThree: 'Product Categories',
    };
  }

  render() {
    return (
      <footer className={styles.Footer}>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <span className={styles.title}>{this.state.titleOne}</span>
              <div>iconok</div>
              <div><img src="https://silver-line.hu/wp-content/uploads/2018/10/simplepay_bankccard_logos_top_02.png" alt="fizetes" /></div>
            </div>
            <div className="col-sm-4">
              <span className={styles.title}>{this.state.titleTwo}</span>
              <div>1051 Budapest, Petőfi tér, Dock 11.</div>
              <div>Map ide</div>
            </div>
            <div className="col-sm-4">
              <span className={styles.title}>{this.state.titleThree}</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
