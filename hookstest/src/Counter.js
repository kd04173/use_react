// import React, { useState } from 'react';
// // useState() Hook 예제
// // 사용선언: const [상태명, set상태명] = useState(초기값);    set상태명 --> setter함수
// // 상태는 setter함수로만 변경 가능
//
// const Counter = () => {
//   const [cnt, setCnt] = useState(0);
//   return (
//     <>
//       <p>
//         현 카운터의 값: <b>{cnt}</b>{' '}
//       </p>
//       <button
//         onClick={() => {
//           setCnt(cnt + 1);
//           // set상태명 --> setter함수
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setCnt(cnt - 1);
//         }}
//       >
//         -1
//       </button>
//     </>
//   );
// };
//
// export default Counter;

import React, { useReducer } from 'react';
const calculate = (state, action) => {
  switch (action.type) {
    case '더하기':
      return { value: state.value + 1 };
    case '빼기':
      return { value: state.value - 1 };
    default:
      return state;
  }
};
const Counter = () => {
  const [cnt, setCntAction] = useReducer(calculate, { value: 0 });
  return (
    <>
      <p>
        현 카운터의 값: <b>{cnt.value}</b>{' '}
      </p>
      <button
        onClick={() => {
          setCntAction({ type: '더하기' });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCntAction({ type: '빼기' });
        }}
      >
        -1
      </button>
    </>
  );
};

export default Counter;
