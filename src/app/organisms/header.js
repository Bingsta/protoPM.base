import React, {Component} from 'react';
import styles from './header.less';
import {Mediaobject} from '../molecules/mediaobject';
import {Glyphicon, InputGroup, FormGroup, FormControl} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Mediaobject image={{src: '../content/images/rezi-logo.svg', width: '24'}} text="dezrez services ltd."/>
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
        <div className={styles.globalToolsContainer}></div>
      </header>
    );
  }
}
