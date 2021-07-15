import * as React from 'react';

class Clock extends React.Component {
    state = {
      date: new Date(),
    }
    
    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
      
    tick() {
      this.setState({date: new Date()});
    }
    
    render() {
      return this.state.date.toLocaleTimeString();
    }
  }

  export default Clock;

