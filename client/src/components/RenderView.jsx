import React from 'react';
import styles from './../styles.css';
import ImageDiv from './ImageDiv.jsx';

class RenderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.parent}>
        {this.props.places.map((place, index) => {
          return (
            <ImageDiv place={place} key={index}/>
          )
        })}
      </div>
    )
  }
}

export default RenderView;
