import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 0
    };
  }

  render() {
    return (
      <div>
        {this.state.test}
        <button onClick={() => {this.setState((prevState) => { return {test: prevState.test +1 };});}}>Click</button>
        <button onClick={() => {this.setState({ test: this.state.test + 1})}}>Click</button>
      </div>
    );
  }
}
