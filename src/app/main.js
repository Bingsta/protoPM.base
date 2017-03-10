import React, {Component} from 'react';

import {Header2} from './organisms/header2';
import {Footer} from './organisms/footer';
import {Sidebar} from './organisms/sidebar';

import styles from './main.less';

export class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Sidebar/>
        <main className={styles.main}>
          <Header2/>
          <section className={styles.pageContainer}>
            {this.props.children}
          </section>
          <Footer/>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired
};
