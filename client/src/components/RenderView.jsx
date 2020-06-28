import React from 'react';
import styles from './../styles.css';
console.log(styles);
class RenderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.parent}>
        {this.props.places.map((place, index) => {
          return (
            <div key={index} className={styles.child}>
              <img src={place.imageUrl}></img>
              <span className={styles.favFalse}>&#9829;</span>
              <p>{place.description}</p>
              <p> <span className={styles.price}>${place.price}</span> / night</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RenderView;
