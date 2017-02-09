import React, {Component} from 'react';
import styles from './footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        Build with ♥ by the&nbsp;
        <a>
          dezrez product team
        </a>
      </footer>
    );
  }
}
