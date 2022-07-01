// import logo from "./logo.svg";
// const logo = require('./logo.svg');
import "./App.css";
// import React, {Fragment} from 'react';
import React from "react";

function App() {
  // 함수형 컴포넌트 작성: App 컴포넌트
  const name = "react";
  // const number = 0;
  // const number = false;
  const number = '';
  return (
    // JSX객체 return, JSX의 문법
    // JSX의 주석: {/* 주석 */}
    // <Fragment>
    //   <h1>리액트 안녕</h1>
    //   <h2>잘 작동하니></h2>
    // </Fragment>
    // <>
    //   <h1>리액트 안녕</h1>
    //   <h2>잘 작동하니></h2>
    // </>
    // <>
    //     {name === 'react' ?
    //         <h1>리액트 입니다.</h1> :
    //         <h2>리액트가 아닙니다.</h2>}
    // </>
    <>
      {name === "react" ? <h1>리액트</h1> : null}
      {name === "react" && <h1>리액트</h1>}
      {number && <h1>보임?</h1>}
    </>
  );
}

export default App;
// module.exports = App;
