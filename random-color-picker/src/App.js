import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Random extends React.Component {
  //initializing state values through constructor
  constructor(props) {
    //passing props to super up to component
    super(props); 
    this.state = {color: [50, 150, 255]}
    this.handleClick = this.handleClick.bind(this);
  }
  
  //lifecycle method
  componentDidMount() {
    this.applyColor();
  }
	//lifecycle method
  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  handleClick() {this.setState({
      color : this.chooseColor()
    })
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
					Your colour is {this.formatColor(this.state.color)}.
        </h1>
        <Button light ={this.isLight()} 
          onClick = {this.handleClick}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);

export default Random;
