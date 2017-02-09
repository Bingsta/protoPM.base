import React, {Component} from 'react';
import Styles from './header.css';
import {Mediaobject} from '../molecules/mediaobject';

export class Header extends Component {
  render() {
    return (
      <header className={Styles.header}>
        <Mediaobject image={{src: '../content/images/rezi-logo.svg', width: '24'}} text="dezrez services ltd."/>
      </header>
    );
  }
}
