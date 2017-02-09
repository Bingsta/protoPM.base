import React, {Component} from 'react';
import styles from './content.css';

export class Content extends Component {
  render() {
    return (
      <div className={styles.content}>[page content]</div>
    );
  }
}
