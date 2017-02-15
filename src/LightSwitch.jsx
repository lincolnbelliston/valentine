import React from 'react';
import {Button} from 'react-bootstrap';

var LightSwitch = React.createClass({
  getInitialState() {
    return {
      buttonStyle: 'default'
    };
  },

  toggleLights() {
    this.props.toggleLights();
    this.changeButtonStyle();

  },

  changeButtonStyle(){
    if(this.props.lightIsOn){
      this.setState({
        buttonStyle: 'default'
      })
    } else{
      this.setState({
        buttonStyle: 'info'
      })
    }
  },

  render() {
    return (
      <div>
        <Button className="lightSwitch" bsStyle={this.state.buttonStyle} onClick={this.toggleLights}>Click me</Button>
      </div>

    );
  }

});

export default LightSwitch;
