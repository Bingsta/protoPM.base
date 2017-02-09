import React, {Component} from 'react';
import styles from './sidebar.less';
import {NavLink} from '../atoms/navLink';
import {IndexLink} from 'react-router';

export class Sidebar extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <ul role="nav" className={styles.list}>
          <li className={styles.listItem}><IndexLink to="/">Home</IndexLink></li>
          <li className={styles.listItem}><NavLink to="/components">Components</NavLink></li>
          <li className={styles.listItem}><NavLink to="/prototypes">Prototypes</NavLink></li>
        </ul>
      </nav>
    );
  }
}
