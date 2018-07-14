import React, { Component } from 'react';

import serverFeed from './ServerFeed';

class ConnectionStatus extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const connectionFeed = serverFeed.subscribe('connection', message => this.log(message));
    this.setState({connectionFeed});
  }

  componentWillUnmount () {
    serverFeed.unsubscribe(this.connectionFeed);
  }

  log(message) {
    this.setState({
      message: message
    });
  }

  render() {
    return (
      <div>Connection Status: {this.state.message}</div>
    );
  }
}

export default ConnectionStatus;
