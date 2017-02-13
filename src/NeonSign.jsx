import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

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
              <span id="neonSwitch"
                onClick={this.turnonlights}
                style={{display: this.state.buttonDisplay}}>Turn em on</span>
              <span id="lights" className={this.state.className}>will u b my<br />valentine?</span>
            </div>
          </Col>
        </Row>
      </Grid>



    );
  }

});

export default NeonSign;
