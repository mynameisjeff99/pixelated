import React, { Component } from 'react';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground(e) {
    e.target.style.background = 'red';
  }

  render() {
    const {title} = this.props;
    let all_items =[];
    for (let i = 0; i < 16; i++) {
      let items = []
      for (let j = 0; j < 16; j++) {
        let id= i.toString()+'_'+j.toString()
        items.push(<div onMouseOver={this.changeBackground} 
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
export {Canvas};