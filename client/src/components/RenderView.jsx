import React from 'react';

class RenderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='parent'>
        {this.props.places.map((place, index) => {
          return (
            <div key={index} className='child'>
              <img src={place.imageUrl}></img>
              <p>{place.description}</p>
              <p> <span className='price'>${place.price}</span> / night</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RenderView;
