import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px',
  color:'red',
  linehigh:'20px'
};

class ControlPanel extends Component {

  constructor(props) { //构造函数 props是对外的状态
    super(props);

    this.onCounterUpdate = this.onCounterUpdate.bind(this);

    this.initValues = [ 0, 10, 20]; 

    const initSum = this.initValues.reduce((a, b) => a+b, 0);
    this.state = { // 定义state state是对内的状态
      sum: initSum
    };
  }

  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange});
  }

  render() { 
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="First" />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
        <hr/>
        <div>Total Count: {this.state.sum}</div>
      </div>
    );
  }
}

export default ControlPanel;