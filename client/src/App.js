import React, { Component } from 'react';
import {Canvas} from './Canvas';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { apiResponse: ''};
  }

  render() {
    return (
      <div>
        <Canvas title='Home Page' />
      </div>
    )
  }

  /*callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    )
  }*/ß
}
export default App;