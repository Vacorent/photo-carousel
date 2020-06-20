import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {places: []}
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/carousel',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        this.setState({
          places: data
        })
      }
    })
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App;