import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import LightSwitch from './LightSwitch.jsx';

var NeonSign = React.createClass({
  getInitialState() {
    return {
      lightIsOn: false,
      className: ''
    };
  },

  toggleLights() {
    if(this.state.lightIsOn){
      this.turnOffLights();
    } else {
      this.turnOnLights();
    }

  },

  turnOnLights() {
    this.setState({
      lightIsOn: true,
      className: 'animate'
    })
  },

  turnOffLights(){
    this.setState({
      lightIsOn: false,
      className: ''
    });
  },

  render() {
    return (
      <Grid className="neonContent">
        <Row>
          <Col>
            <div>
              <span id="lights" className={this.state.className}>will u b my<br />valentine?</span>
            </div>
          </Col>
        </Row>
        <br /><br /><br />
        <Row>
          <Col>
            <LightSwitch toggleLights={this.toggleLights} lightIsOn={this.state.lightIsOn}/>
          </Col>
        </Row>
      </Grid>



    );
  }

});

export default NeonSign;
