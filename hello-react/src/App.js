import React, { Component } from 'react';
import './App.css';
import ClassLifeCycleComponent from './ClassLifeCycleComponent';
import ErrorClassLifeCycleComponent from './ErrorClassLifeCycleComponent';

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  // Math.random() * 16777215(10진수) -->  ffffff(16진수)
};

class App extends Component {
  state = {
    color: '#000000',
  };
  onClick = (e) => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    return (
      <>
        <button onClick={this.onClick}>랜덤색상</button>
        <ErrorClassLifeCycleComponent>
          <ClassLifeCycleComponent color={this.state.color} />
        </ErrorClassLifeCycleComponent>
      </>
    );
  }
}

export default App;
