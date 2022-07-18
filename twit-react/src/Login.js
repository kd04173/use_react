import React, { useState } from 'react';

const Login = (props) => {
  const sendLoggedIn = () => {
    props.getLoggedIn(true, email);
    props.getSignup(false);
  };
  const sendSignup = () => {
    props.getSignup(true);
  };
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Login = () => {
    sendLoggedIn();
  };
  const Signup = () => {
    sendSignup();
  };
  return (
    <>
      <div className="user">
        <div>
          <div className="userLogin">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <span>{email}</span>
          </div>
          <div className="userLogin">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <span>{password}</span>
          </div>
          <button onClick={Login}>로그인</button>
          <button>카카오톡</button>
          <button onClick={Signup}>회원가입</button>
        </div>
      </div>
    </>
  );
};

export default Login;
