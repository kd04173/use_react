import React, { Component } from 'react';

// class EventClassComponent extends Component {
//   state = {
//     msg: '',
//   };
//
//   render() {
//     return (
//       // JSX문법
//       <>
//         <h1>이벤트 연습(Class형)</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.msg}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               alert(this.state.msg);
//               this.setState({ msg: '' });
//             }
//           }}
//           onChange={(e) => {
//             // e: event객체, SyntheticBaseEvent 객체
//             this.setState({ msg: e.target.value });
//           }}
//         />
//         <button
//           onClick={(e) => {
//             alert(this.state.msg);
//             this.setState({ msg: '' });
//           }}
//         >
//           확인
//         </button>
//         <div>{this.state.msg}</div>
//       </>
//     );
//   }
// }

// class EventClassComponent extends Component {
//   state = {
//     msg: '',
//   };
//   // handleKeyPress(e){
//   // if (e.key === 'Enter') {
//   //     alert(this.state.msg);
//   //     this.setState({ msg: '' });
//   //  }
//   //  여기서 this는 이 함수를 호출한 input태그의 this가 됨
//   // }
//
//   // this해결법 1: bind함수 이용
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleKeyPress(e) {
//     if (e.key === 'Enter') {
//       alert(this.state.msg);
//       this.setState({ msg: '' });
//     }
//   }
//
//   handleChange(e) {
//     this.setState({ msg: e.target.value });
//   }
//
//   handleClick() {
//     alert(this.state.msg);
//     this.setState({ msg: '' });
//   }
//
//   render() {
//     return (
//       // JSX문법
//       <>
//         <h1>이벤트 연습(Class형)</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.msg}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//         <div>{this.state.msg}</div>
//       </>
//     );
//   }
// }

// class EventClassComponent extends Component {
//   state = {
//     msg: '',
//   };
//
//   // this해결법 2: 화살표 함수 사용
//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       alert(this.state.msg);
//       this.setState({ msg: '' });
//     }
//   };
//
//   handleChange = (e) => {
//     this.setState({ msg: e.target.value });
//   };
//
//   handleClick = () => {
//     alert(this.state.msg);
//     this.setState({ msg: '' });
//   };
//
//   render() {
//     return (
//       // JSX문법
//       <>
//         <h1>이벤트 연습(Class형)</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.msg}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//         <div>{this.state.msg}</div>
//       </>
//     );
//   }
// }

class EventClassComponent extends Component {
  // input 태그가 여러개일때 하나의 이벤트핸들러로 처리하기
  state = {
    username: '',
    msg: '',
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert(e.target.value);
      this.setState({ [e.target.name]: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    alert(this.state.username + ': ' + this.state.msg);
    this.setState({ username: '', msg: '' });
  };

  render() {
    return (
      <>
        <h1>이벤트 연습(Class형)</h1>
        <input
          type="text"
          name="username"
          placeholder="입력"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <input
          type="text"
          name="msg"
          placeholder="입력"
          value={this.state.msg}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
        <div>{this.state.username + ' ' + this.state.msg}</div>
      </>
    );
  }
}

export default EventClassComponent;
