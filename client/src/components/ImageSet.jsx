import React from 'react';
import RenderView from './RenderView.jsx'

class ImageSet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='carousel'>
        {this.props.view === 1 &&
          <RenderView places={this.props.places.slice(0, 4)}/>
        }
        {this.props.view === 2 &&
          <RenderView places={this.props.places.slice(4, 8)}/>
        }
        {this.props.view === 3 &&
          <RenderView places={this.props.places.slice(8, 12)}/>
        }
      </div>
    )
  }
}

export default ImageSet;

