import React, { useState } from 'react';
// 사전지식
// 배열의 구조분해 할당
// const arr = [1, 2];
// const one = arr[0];
// const two = arr[1];
//  ==>
// const arr1 = [1, 2];
// const [one1, two1] = arr1;

const FunctionStateComponent = () => {
  // 상태 선언 및 초기화: const [상태명, 상태변경 Setter 함수명] = useState(초기값);
  const [number, setNumber] = useState(0);
  const [noproblem, setNoproblem] = useState('');

  return (
    <>
      <div>
        <h1>{number}</h1>
        <h2>{noproblem}</h2>
        <button
          onClick={() => {
            setNumber(number + 1); // 상태변화는 setter함수로만 가능
            setNoproblem(noproblem + '일본취업');
          }}
        >
          +1(function)
        </button>
      </div>
    </>
  );
};

export default FunctionStateComponent;
