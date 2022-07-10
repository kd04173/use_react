// import React, { useState } from 'react';
//
// const calculateAvg = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const sum = arr.reduce((acc, cur) => {
//     return acc + cur;
//   });
//   return sum / arr.length;
// };
//
// const Average = () => {
//   const [numArr, setNumArr] = useState([]);
//   const [num, setNum] = useState('');
//   const onChange = (e) => {
//     setNum(e.target.value);
//   };
//   const onInsert = () => {
//     if (num === '') {
//       return alert('숫자를 입력해주세요');
//     }
//     const newNumArr = numArr.concat(parseInt(num));
//     setNumArr(newNumArr);
//     setNum('');
//   };
//
//   return (
//     <>
//       <input type="text" value={num} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {numArr.map((value, index) => {
//           return <li key={index}>{value}</li>;
//         })}
//       </ul>
//       <div>
//         <b>평균값: </b> {calculateAvg(numArr)}
//       </div>
//     </>
//   );
// };
//
// export default Average;

import React, { useMemo, useState, useCallback, useRef } from 'react';

const calculateAvg = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  return sum / arr.length;
};

const Average = () => {
  const [numArr, setNumArr] = useState([]);
  const [num, setNum] = useState('');

  const inputTag = useRef(null);

  const onChange = useCallback((e) => {
    setNum(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될때 이벤트핸들러가 생성

  const onInsert = useCallback(() => {
    if (num === '') {
      return alert('숫자를 입력해주세요');
    }
    const newNumArr = numArr.concat(parseInt(num));
    setNumArr(newNumArr);
    setNum('');
    inputTag.current.focus();
  }, [num, numArr]);

  const avg = useMemo(() => {
    return calculateAvg(numArr);
  }, [numArr]);

  return (
    <>
      <input type="text" value={num} onChange={onChange} ref={inputTag} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {numArr.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </>
  );
};

export default Average;
