import React, { Component } from 'react';

class ClassLifeCycleComponent extends Component {
  // state = { number: 0, color: null };
  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor 호출');
    this.state = { number: 0, color: null };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps 호출');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount 호출');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate 호출: ', nextProps, nextState);
    return nextState.number % 10 !== 4; // 일의 자리가 4인 숫자는 리렌더링 금지
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate 호출');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate 호출: ', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 전의 색상: ', snapshot);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }

  onClick = (e) => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log('render 호출');
    const myStyle = { color: this.props.color };

    return (
      <>
        {this.props.missing.value}
        <h1>라이프사이클 연습</h1>
        <div>
          <h1
            style={myStyle}
            ref={(ref) => {
              this.myRef = ref;
            }}
          >
            {this.state.number}
          </h1>
          <p>color : {this.state.color}</p>
          <button onClick={this.onClick}>+1</button>
        </div>
      </>
    );
  }
}

export default ClassLifeCycleComponent;
