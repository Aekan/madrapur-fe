import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import LazyLoading from 'common/components/LazyLoading';
import styles from '../style/index.css';

const pageRender = withRouter((props) => <Page {...props} />);

const Page = (() => { return LazyLoading(() => import('views/home')) })();

module.exports = (
  <div className={styles.container}>
    <div id="index" className={styles.content}>
      <Switch>
        <Route exact path="/" render={pageRender} />
        <Route path="*" component={pageRender} />
      </Switch>
    </div>
  </div>
);
