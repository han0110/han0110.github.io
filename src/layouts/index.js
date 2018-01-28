// @flow

import React, { Node, Component } from 'react';
import Helmet from 'react-helmet';
import Nav from '../components/Nav';

import helmet from '../helmet.json';
import './index.scss';
import styles from './index.module.scss';

type Props = {
  children: void => Node,
  location: Object,
};

type State = {
};

class Layout extends Component<Props, State> {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { children, location } = this.props;

    return (
      <div className={styles.wrapper}>
        <Helmet {...helmet} />
        <Nav pathname={location.pathname} />
        <div>{children()}</div>
      </div>
    );
  }
}

export default Layout;
