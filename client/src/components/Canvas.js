import React, { Component } from 'react';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorMap: {2022: '#6667AB', 2021: '#939597', 2020: '#0f4c81',
        2019: '#ff6f61', 2018: '#5f4b8b', 2017: '#88b04b', 2016: '#f7caca',
        2015: '#955251', 2014: '#ad5e99'},
      canvasColor: "#f7caca", 
      brushColor: "#5f4b8b"};
    //this.changeCanvasColor = this.changeCanvasColor.bind(this);
    this.changeBrushColor = this.changeBrushColor.bind(this);
  }

  changeBrushColor(e) {
    e.target.style.background = this.state.brushColor;
  }

  render() {
    const {title} = this.props;
    let all_items =[];
    for (let i = 0; i < 16; i++) {
      let items = []
      for (let j = 0; j < 16; j++) {
        let id= i.toString()+'_'+j.toString()
        items.push(<div onMouseOver={this.changeBrushColor} style={{backgroundColor: this.state.canvasColor}}
          id={id} key={j} className='canvasBox'/>)
      }
      all_items.push(<div key={i} className='canvasRow row'> {items} </div>);
    }

    return (
      <div id='container' className='colFlex'>
        <div id='canvas' className='colFlex'>
          {all_items}
        </div>
      </div>
    )
  }
}
export default Canvas;