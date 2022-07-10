import React, { Component } from 'react';

class ErrorClassLifeCycleComponent extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
    console.log('componentDidCatch 호출', { error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return <div> 에러가 발생 했습니다.</div>;
    }
    return this.props.children;
  }
}

export default ErrorClassLifeCycleComponent;
