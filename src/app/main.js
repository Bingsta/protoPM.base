import React, {Component} from 'react';
import {Header} from './organisms/header';
import {Footer} from './organisms/footer';
import {Sidebar} from './organisms/sidebar';
import styles from './main.less';

export class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <main className={styles.main}>
          <Sidebar/>
          <section className={styles.pageContainer}>
            {this.props.children}
          </section>
        </main>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired
};
