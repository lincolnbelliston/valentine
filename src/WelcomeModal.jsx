import React from 'react';

var WelcomeModal = React.createClass({
  getInitialState() {
    return {
      activeKey: 0
    };
  },

  render() {
    return (
      <h2>
        Hello world
      </h2>

    );
  }

});

export default WelcomeModal;
