import React from 'react';

const Logout = (props) => {
  const sendLoggedIn = () => {
    props.getLoggedIn(false, { userEmail: '' });
  };
  const { userEmail } = props;
  const Logout = () => {
    sendLoggedIn();
  };
  return (
    <div>
      <div>안녕하세요{userEmail}님</div>
      <button>내프로필</button>
      <button onClick={Logout}>로그아웃</button>
    </div>
  );
};

export default Logout;
