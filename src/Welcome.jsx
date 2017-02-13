import React from 'react';

var Welcome = React.createClass({
  getInitialState() {
    return {
      activeKey: 0
    };
  },

  render() {
    return (
      <div>
        Hello world
      </div>

    );
  }

});

export default Welcome;
