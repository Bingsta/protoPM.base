import React, {Component} from 'react';
import styles from './mediaobject.css';

export class Mediaobject extends Component {
  render() {
    console.log(this);
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={this.props.image.src} width={this.props.image.width}/>
        </div>
        <p className={styles.text}>{this.props.text}</p>
      </div>
    );
  }
}

Mediaobject.propTypes = {
  text: React.PropTypes.string.isRequired,
  image: React.PropTypes.object.isRequired
};
