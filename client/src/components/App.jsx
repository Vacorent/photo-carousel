import React from 'react';
import $ from 'jquery';
import ImageSet from './ImageSet.jsx';
import styles from './../styles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {places: [], view: 1};
    this.nextView = this.nextView.bind(this);
    this.prevView = this.prevView.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
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

  nextView() {
    var next;
    if (this.state.view === 3) {
      next = 1;
    } else {
      next = this.state.view + 1;
    }
    this.setState({
      view: next
    })
  }

  prevView() {
    var prev;
    if (this.state.view === 1) {
      prev = 3;
    } else {
      prev = this.state.view - 1;
    }
    this.setState({
      view: prev
    })
  }

  render() {
    return (
      <div>
        <h2>More Places to Stay</h2>
        <span className={styles.buttons}>
          {this.state.view} / 3
          <button onClick={this.prevView}>&lt;</button>
          <button onClick={this.nextView}>&gt;</button>
        </span>
        {this.state.places.length === 0 &&
          <div></div>
        }
        {this.state.places.length !== 0 &&
          <div>
            <ImageSet places={this.state.places} view={this.state.view}/>
          </div>
        }
      </div>
    )
  }
}

export default App;