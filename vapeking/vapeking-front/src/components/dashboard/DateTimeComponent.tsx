import * as React from 'react';

class Clock extends React.Component {
  timerID: number;

  state = {
      date: new Date()
  };

  componentDidMount() {
      this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick() {
      this.setState({
          date: new Date()
      });
  }

  render() {
      return (
              <span>{this.state.date.toLocaleTimeString()}</span>
      );
  }
}

  export default Clock;

