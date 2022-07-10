// import React from 'react';
//
// const EventFunctionComponent = () => {
//   return (
//     // JSX문법
//     <>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="message"
//         placeholder="입력"
//         onChange={(e) => {
//           // e: event객체, SyntheticBaseEvent 객체
//           console.log(e);
//           console.log(e.target.value);
//         }}
//       />
//     </>
//   );
// };
//
// export default EventFunctionComponent;

// import React, { useState } from 'react';
//
// const EventFunctionComponent = () => {
//   const [username, setUsername] = useState('');
//   const [msg, setMsg] = useState('');
//
//   const handleChangeMsg = (e) => {
//     setMsg(e.target.value);
//   };
//   const handleChangeUsername = (e) => {
//     setUsername(e.target.value);
//   };
//
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleClick(e);
//     }
//   };
//   const handleClick = (e) => {
//     if (e.target.name === 'msg') {
//       alert(e.target.value);
//       setMsg('');
//     } else if (e.target.name === 'username') {
//       alert(e.target.value);
//       setUsername('');
//     } else {
//       alert(username + ' : ' + msg);
//       setMsg('');
//       setUsername('');
//     }
//   };
//   return (
//     <>
//       <h1>이벤트 연습(Function형)</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="입력"
//         value={username}
//         onChange={handleChangeUsername}
//         onKeyPress={handleKeyPress}
//       />
//       <br />
//       <input
//         type="text"
//         name="msg"
//         placeholder="입력"
//         value={msg}
//         onChange={handleChangeMsg}
//         onKeyPress={handleKeyPress}
//       />
//       <button onClick={handleClick}>확인</button>
//       <div>{username + ' ' + msg}</div>
//     </>
//   );
// };
//
// export default EventFunctionComponent;

import React, { useState } from 'react';

const EventFunctionComponent = () => {
  // const [username, setUsername] = useState('');
  // const [msg, setMsg] = useState('');

  const [select, setSelect] = useState({ username: '', msg: '' });

  const { username, msg } = select;

  const handleChange = (e) => {
    const newSelect = {
      ...select,
      [e.target.name]: e.target.value,
    };
    setSelect(newSelect);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const newSelect = {
        ...select,
        [e.target.name]: '',
      };
      alert(e.target.value);
      setSelect(newSelect);
    }
  };
  const handleClick = () => {
    alert(username + ' : ' + msg);
    setSelect({ username: '', msg: '' });
  };
  return (
    <>
      <h1>이벤트 연습(Function형)</h1>
      <input
        type="text"
        name="username"
        placeholder="입력"
        value={username}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <br />
      <input
        type="text"
        name="msg"
        placeholder="입력"
        value={msg}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
      <div>{username + ' ' + msg}</div>
    </>
  );
};

export default EventFunctionComponent;
