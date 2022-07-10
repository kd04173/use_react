// state 처리 방법 1 - constructor 에서 객체로 설정

// import React, { Component } from 'react';
//
// class ClassStateComponent extends Component {
//   // state 처리 방법 1 - constructor 에서 객체로 설정
//   constructor(props) {
//     super(props); // 반드시 먼저 호출되도록 구현
//     this.state = { number: 0, noproblem: '' }; // 상태의 초기값 설정:{ 상태값명1: 초기치1, 상태값명2: 초기치2 }
//   }
//
//   render() {
//     const { number, noproblem } = this.state; // 구조분해 할당, 상수와 상태연결
//     return (
//       // JSX 문법
//       <>
//         <div>
//           <h1>
//             {number} {/*상태값조회*/}
//             {/*JSX문법*/}
//           </h1>
//           <h2>{noproblem}</h2>
//           <button
//             onClick={() => {
//               // {JS 함수}
//               this.setState({ number: number + 1 });
//               // 상태의 변경: this.setState({상태값명: 변경치})
//               this.setState({ noproblem: noproblem + '일본취업' });
//             }}
//           >
//             +1
//           </button>
//         </div>
//       </>
//     );
//   }
// }
//
// export default ClassStateComponent;

// state 처리 방법 2

// import React, { Component } from 'react';
//
// class ClassStateComponent extends Component {
//   // 바로 state사용으로 상태 초기화
//   state = {
//     number: 0,
//     noproblem: '',
//   };
//   render() {
//     const { number, noproblem } = this.state; // 구조분해 할당, 상수와 상태연결
//     return (
//       // JSX 문법
//       <>
//         <div>
//           <h1>
//             {number} {/*상태값조회*/}
//             {/*JSX문법*/}
//           </h1>
//           <h2>{noproblem}</h2>
//           <button
//             onClick={() => {
//               // {JS 함수}
//               this.setState({ number: number + 1 });
//               // 상태의 변경: this.setState({상태값명: 변경치})
//               this.setState({ noproblem: noproblem + '일본취업' });
//             }}
//           >
//             +1
//           </button>
//         </div>
//       </>
//     );
//   }
// }
//
// export default ClassStateComponent;

import React, { Component } from 'react';

class ClassStateComponent extends Component {
  // 바로 state사용으로 상태 초기화
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state; // 구조분해 할당, 상수와 상태연결
    return (
      // JSX 문법
      <>
        <div>
          <h1>
            {number} {/*상태값조회*/}
            {/*JSX문법*/}
          </h1>
          <button
            onClick={
              // function(){} 사용불가 --> this의 scope 때문에
              () => {
                // {JS 함수}
                // this.setState({ number: number + 1 });
                // setState() 비동기적으로 작동 ==> 콜백함수로 작성
                this.setState((prevState) => {
                  // prevState: 이전 상태값
                  return { number: prevState.number + 1 };
                }); // 동기작동
                this.setState(
                  (prevState, props) => ({
                    number: prevState.number + 1,
                  }),
                  () => {
                    console.log('상태변경 완료');
                  }
                );
                // this.setState( prevState => ({ number: prevState.number + 1 }));
                // 상태의 변경: this.setState({상태값명: 변경치}) setter함수로
              }
            }
          >
            +1
          </button>
        </div>
      </>
    );
  }
}

export default ClassStateComponent;
