import React, { /*useState,*/ useEffect, useReducer } from 'react';

const useInfoUpdate = (state, action) => {
  return { ...state, [action.name]: action.value }; // action: e.target    sate: reducerObj: {name: '', nickname: ''}
};

const Info = () => {
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [users, setUsers] = useState({ name: '', nickname: '' });
  // const { name, nickname } = users;

  const [reducerObj, setReducerObj] = useReducer(useInfoUpdate, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = reducerObj;

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickName = (e) => {
  //   setNickname(e.target.value);
  // };
  // const onChange = (e) => {
  // setUsers({ ...users, [e.target.name]: e.target.value });
  // };

  const onChange = (e) => {
    setReducerObj(e.target);
  };

  // useEffect(() => {
  //   console.log('렌더링 완료');
  //   console.log({ name, nickname });
  // }, []);
  // useEffect(() => {
  //   console.log('이름변경');
  //   console.log({ name, nickname });
  // }, [name]);
  // useEffect(() => {
  //   console.log('닉네임변경');
  //   console.log({ name, nickname });
  // }
  useEffect(() => {
    console.log('렌더링 완료');
    // console.log({ name, nickname });
    return () => {
      console.log('Unmount');
      // console.log({ name, nickname });
    };
  }, []);
  return (
    <>
      <div>
        {/*<input type="text" value={name} onChange={onChangeName} />*/}
        {/*<input type="text" value={nickname} onChange={onChangeNickName} />*/}
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <b>이름: {name}</b>
        </div>
        <div>
          <b>닉네임: {nickname}</b>
        </div>
      </div>
    </>
  );
};

export default Info;
