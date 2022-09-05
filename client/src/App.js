import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*colorMap: {2022: '#6667AB', 2021: '#939597', 2020: '#0f4c81',
        2019: '#ff6f61', 2018: '#5f4b8b', 2017: '#88b04b', 2016: '#f7caca',
        2015: '#955251', 2014: '#ad5e99'}, */
      canvasColor: "#f7caca", 
      brushColor: "#5f4b8b",
      colored: [],
      toRestore: false};
    //this.changeCanvasColor = this.changeCanvasColor.bind(this);
    this.colorSquare = this.colorSquare.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
  }

  colorSquare(e) {
    e.target.style.background = this.state.brushColor;
    this.setState(prevState => ({
      colored: [...prevState.colored, e.target.id]
    }));
  }

  handleSave(e) {
    axios.post(`${process.env.REACT_APP_API_URI}game/save-game`, {
      user: this.props.user,
      game_setting: this.state.colored,
    })
  };

  handleRestore(e) {
    axios.get(`${process.env.REACT_APP_API_URI}game/restore-game/${this.props.user._id}`)
    .then(response => {
      console.log(response.data)
      if (!!response.data.game_setting) {
        console.log('Successfully restored the game')
        this.setState({
          toRestore: true,
          colored: response.data.game_setting,
        })
      } else {
        console.log("Error")
      }
    })
  };


  /*
  render() {
    let all_items =[];
    for (let i = 0; i < 16; i++) {
      let items = []
      for (let j = 0; j < 16; j++) {
        let id= i.toString()+'_'+j.toString()
        items.push(<div onMouseOver={this.colorSquare} style={{backgroundColor: this.state.canvasColor}}
          id={id} key={j} className='canvasBox'/>)
      }
      all_items.push(<div key={i} className='canvasRow row'> {items} </div>);
    }
    */
   
  render() {
    let all_items =[];
    for (let i = 0; i < 16; i++) {
      let items = []
      for (let j = 0; j < 16; j++) {
        let id= i.toString()+'_'+j.toString()
        items.push(<div onMouseOver={this.colorSquare} style={{backgroundColor: this.state.toRestore ? 
          (this.state.colored.includes(id) ? this.state.brushColor: this.state.canvasColor)
          : this.state.canvasColor}}
          id={id} key={j} className='canvasBox'/>)
      }
      all_items.push(<div key={i} className='canvasRow row'> {items} </div>);
    }
    return (
      <div id='container' className='colFlex'>
        <div id='canvas' className='colFlex'>
          {all_items}
        </div>
        <button onClick={this.handleSave}>Save this game</button>
        <button onClick={this.handleRestore}>Restore previous Game</button>
      </div>
    )
  }
}

export default App;