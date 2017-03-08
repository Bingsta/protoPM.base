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
        <div className={styles.agentLogo}>

        </div>
        <ul role="nav" className={styles.list}>
          <li className={styles.listItem}><i className="icon-menu7"></i></li>
          <li className={styles.listItem}><IndexLink to="/" activeClassName={styles.active}><i className="icon-meter3"></i><span className={styles.navText}>Home dashboard</span></IndexLink></li>
          <li className={styles.listItem}><NavLink to="/components" activeClassName={styles.active}><i className="icon-home2 "></i><span className={styles.navText}>Components</span></NavLink></li>
          <li className={styles.listItem}><NavLink to="/prototypes" activeClassName={styles.active}><i className="icon-user3"></i><span className={styles.navText}>Prototypes</span></NavLink></li>
          <li className={styles.listItem}><NavLink to="/landlords" activeClassName={styles.active}><i className="icon-user4"></i><span className={styles.navText}>Landlords</span></NavLink></li>
        </ul>
      </nav>
    );
  }
}
