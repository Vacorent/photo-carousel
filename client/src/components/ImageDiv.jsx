import React from 'react';
import styles from './../styles.css';

class ImageDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false}
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({hover: true})
  }

  hoverOff() {
    this.setState({hover: false})
  }

  render() {
    return (
      <div className={styles.child}>
        <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
          <img src={this.props.place.imageUrl} ></img>
          {this.state.hover === true &&
            <div className={styles.heartIcon}><i className="far fa-heart"></i></div>
          }
        </div>
        <p>{this.props.place.description}</p>
        <p> <span className={styles.price}>${this.props.place.price}</span> / night</p>
      </div>
    )
  }
}

export default ImageDiv;