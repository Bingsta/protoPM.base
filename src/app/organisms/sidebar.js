import React, {Component} from 'react';
import styles from './sidebar.less';
import {NavLink} from '../atoms/navLink';
import {IndexLink} from 'react-router';

export class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };

    this.closeSidebar = this.closeSidebar.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  openSidebar() {
    this.setState({open: true});
  }

  closeSidebar() {
    this.setState({open: false});
  }

  toggleSidebar() {
    this.setState({open: !this.state.open});
  }

  handleMenuClick() {
    this.toggleSidebar();
  }

  render() {
    return (
      <nav className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
        <div className={styles.logo}>

        </div>
        <ul role="nav" className={styles.list}>
          <li className={`${styles.listItem} ${styles.listItemOpen} visible-xs visible-sm`}><a onClick={this.handleMenuClick}><i className="icon-arrow-right2"></i></a></li>
          <li className={styles.listItem}><IndexLink to="/" activeClassName={styles.active}><i className="icon-meter3"></i><span className={styles.navText}>Home dashboard</span></IndexLink></li>
          <li className={styles.listItem}><NavLink to="/components" activeClassName={styles.active}><i className="icon-home2 "></i><span className={styles.navText}>Components</span></NavLink></li>
          <li className={styles.listItem}><NavLink to="/prototypes" activeClassName={styles.active}><i className="icon-user3"></i><span className={styles.navText}>Prototypes</span></NavLink></li>
          <li className={styles.listItem}><NavLink to="/landlords" activeClassName={styles.active}><i className="icon-user4"></i><span className={styles.navText}>Landlords</span></NavLink></li>
        </ul>
      </nav>
    );
  }
}
