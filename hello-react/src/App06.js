import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import FuncMyComponent from './FuncMyComponent';
import ClassStateComponent from './ClassStateComponent';
import FunctionStateComponent from './FunctionStateComponent';
import EventFunctionComponent from './EventFunctionComponent';
import EventClassComponent from './EventClassComponent';
import ValidateExRef from './ValidateExRef';
import ScrollBoxRef from './ScrollBoxRef';
import MapFunctionComponent from './MapFunctionComponent';
import Signup from './Signup';
import IterateFunctionComponent from './IterateFunctionComponent';

class App extends Component {
  render() {
    const name = 'react';
    const rname = '1000';
    const age = 100;
    return (
      <>
        <div className="react">{name + '입니다.'}</div>
        <MyComponent name="김영진" hakbun={1701077} major="일본IT">
          여기가 내용
        </MyComponent>
        <FuncMyComponent
          name={rname}
          age={age}
          gender="남"
          roomnum="777"
          children="여기가 Content부분"
        />
        <FuncMyComponent name="이름1" age={22} gender="남" roomnum="777">
          확인
        </FuncMyComponent>
        <ClassStateComponent />
        <FunctionStateComponent />
        <EventFunctionComponent />
        <EventClassComponent />
        <ValidateExRef />
        <ScrollBoxRef
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button
          onClick={(e) => {
            this.scrollBox.scrollBoxBottom();
          }}
        >
          맨 밑으로
        </button>
        <ScrollBoxRef />
        <MapFunctionComponent />
        <Signup />
        <div>
          {' '}
          <IterateFunctionComponent />
        </div>
      </>
    );
  }
}

export default App;
