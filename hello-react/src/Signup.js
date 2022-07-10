import React, { useState } from 'react';

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [nextUserIndex, setNextUserIndex] = useState(2);
  const [inputUser, setInputUser] = useState({
    userIndex: 1,
    id: '',
    password: '',
    username: '',
    phonenum: '',
    birthdate: '',
    createdAt: Date(),
  });

  const { id, password, username, phonenum, birthdate } = inputUser;

  const onClick = () => {
    const newInput = {
      ...inputUser,
      createdAt: Date().toLocaleString(),
    };
    console.log(newInput.userIndex);
    setInputUser(newInput);

    const addUser = users.concat(inputUser);
    setUsers(addUser);
    setNextUserIndex(nextUserIndex + 1);

    setInputUser({
      userIndex: nextUserIndex,
      id: '',
      password: '',
      username: '',
      phonenum: '',
      birthdate: '',
      createdAt: Date(),
    });
    console.log(newInput.userIndex);
  };

  const onChange = (e) => {
    const newInput = {
      ...inputUser,
      [e.target.name]: e.target.value,
    };
    setInputUser(newInput);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      // const nextIndex = e.target.tabIndex + 1;
      onChange(e);
    }
  };

  const onBlur = (e) => {
    onChange(e);
  };

  const userList = users.map((user, index) => (
    <div key={index}>
      <ul>
        <li>{user.userIndex}</li>
        <li>{user.id}</li>
        <li>{user.password}</li>
        <li>{user.username}</li>
        <li>{user.phonenum}</li>
        <li>{user.birthdate}</li>
        <li>{user.createdAt}</li>
      </ul>
    </div>
  ));
  return (
    <>
      <h1>회원가입</h1>
      <div>
        아이디
        <input
          type="text"
          name="id"
          value={id}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
        />
        <br />
        비밀번호
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
        />
        <br />
        이름
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
        />
        <br />
        전화번호
        <input
          type="tel"
          name="phonenum"
          value={phonenum}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
        />
        <br />
        생년월일
        <input
          type="date"
          name="birthdate"
          value={birthdate}
          onChange={onChange}
          onBlur={onBlur}
        />
        <br />
        <button onClick={onClick}>회원가입</button>
      </div>
      <div>{userList}</div>
    </>
  );
};

export default Signup;
