import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };

  static propTypes = {
    name: PropTypes.string,
    hakbun: PropTypes.number.isRequired,
  };
  render() {
    // function render()
    const test = '리액트 테스트';
    const { name, hakbun, major, children } = this.props; // 구조분해할당, 비구조화할당
    return (
      <>
        <div className="react">{test + ' 입니다'}</div>
        <div>
          안녕하세요? 저는 {name}이고 학번은{hakbun}입니다. <br />
          전공은 {major} 입니다.
        </div>
        <h1>{children}</h1>
      </>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본이름',
// };
//
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   hakbun: PropTypes.number.isRequired,
// };

export default MyComponent;
