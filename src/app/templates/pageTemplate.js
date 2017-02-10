import React, {Component} from 'react';
import styles from './pageTemplate.less';

export class PageTemplate extends Component {
  render() {
    return (
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{this.props.title}</h1>
        </header>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </article>
    );
  }
}

PageTemplate.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.array.isRequired
};
