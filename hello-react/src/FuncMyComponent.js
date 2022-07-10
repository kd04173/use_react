import React from 'react';
import PropTypes from 'prop-types';

const myStyle = {
  backgroundColor: 'yellow',
  color: 'red',
  fontSize: '34px',
  fontWeight: 'bold',
  padding: '16px',
};

const FuncMyComponent = (props) => {
  // const FuncMyComponent = ({ name, age, gender, roomnum }) => {  바로 받으면 props 생략가능
  // 파라미터로 props를 받음
  const fName = '일본반';
  const { name, age, gender, roomnum } = props; // 위 방법으로 하면 생략가능
  return (
    <>
      <div style={myStyle}>{fName + ' 입니다.'}</div>
      <div>
        안녕하세요 제 이름은 {name} 이고, 나이는 {age}, 성별은 {gender} 입니다.{' '}
        <br />
        기숙사 방 번호는 {roomnum} 입니다.
      </div>
      <div>
        <span>{name}</span>
        <div>{age}</div>
        <ul>
          <li>{gender}</li>
          <li>{roomnum}</li>
        </ul>
        {props.children}
      </div>
    </>
  );
};

// FuncMyComponent.defaultProps = {
//   // props의 default값 설정
//   name: '일본IT',
// };

FuncMyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default FuncMyComponent;
