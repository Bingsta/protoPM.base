import React, {Component} from 'react';
import Headroom from 'react-headroom';
import styles from './header.less';
import {Glyphicon, InputGroup, FormGroup, FormControl} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <Headroom
        tolerance={5}
        offset={400}
        >
        <header className={styles.header}>
          <div className={styles.logoContainer}>
          </div>
          <div className={styles.searchContainer}>
            <form>
              <FormGroup>
                <InputGroup>
                  <FormControl type="search" placeholder="Search for..."/>
                  <InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </form>
          </div>
          <div className={styles.globalToolsContainer}>
            <ul className={styles.globalToolList}>
              <li className={styles.globalToolListItem}>
                <a className={styles.tool} href=""><i className="icon-calendar"></i></a>
              </li>
              <li className={styles.globalToolListItem}>
                <a className={styles.tool} href=""><i className="icon-key"></i></a>
              </li>
              <li className={styles.globalToolListItem}>
                <a className={styles.tool} href=""><i className="icon-checkbox-checked"></i></a>
              </li>
              <li className={styles.globalToolListItem}>
                <a className={styles.tool} href=""><i className="icon-bubble3"></i></a>
              </li>
              <li className={styles.globalToolListItem}>
                <a className={styles.tool} href=""><i className="icon-notification"></i></a>
              </li>
            </ul>
            <div className={styles.avatar}>
            </div>
          </div>
        </header>
      </Headroom>
    );
  }
}
