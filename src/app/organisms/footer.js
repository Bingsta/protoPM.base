import React, {Component} from 'react';
import styles from './footer.less';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        Build with ♥ by the&nbsp;
        <a className={styles.link}>
          dezrez product team
        </a>
      </footer>
    );
  }
}
