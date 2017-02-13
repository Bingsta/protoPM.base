import React, {Component} from 'react';
import styles from './sidebar.less';
import {NavLink} from '../atoms/navLink';
import {IndexLink} from 'react-router';

export class Sidebar extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <div className={styles.logo}>
        </div>
        <ul role="nav" className={styles.list}>
          <li className={styles.listItem}><IndexLink to="/" activeClassName={styles.active}>Home</IndexLink></li>
          <li className={styles.listItem}><NavLink to="/components" activeClassName={styles.active}>Components</NavLink></li>
          <li className={styles.listItem}><NavLink to="/prototypes" activeClassName={styles.active}>Prototypes</NavLink></li>
        </ul>
      </nav>
    );
  }
}
