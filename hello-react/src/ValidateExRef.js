import React, { Component } from 'react';
import './ValidateExRef.css';

class ValidateExRef extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  // inputRef = React.createRef(); // createRef 1. ref 생성

  onChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onClick = () => {
    this.setState({ clicked: true, validated: this.state.password === '0000' });
    // this.inputRef.current.focus(); // createRef 3. ref 사용
    this.inputRef.focus(); // 콜백함수 ref 2. ref 사용
  };

  render() {
    return (
      <div>
        <h1>ref 테스트</h1>
        <input
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          // ref={this.inputRef} // createRef 2. ref를 달아줌
          ref={(ref) => {
            this.inputRef = ref;
          }} // 콜백함수 ref 1. ref 달아줌
        />
        <button onClick={this.onClick}>검증</button>
      </div>
    );
  }
}

export default ValidateExRef;
