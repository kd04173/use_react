import React from 'react';

const Signup = () => {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="text" name="password" />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input type="text" name="nickname" />
        </div>
        <button>가입</button>
      </div>
    </div>
  );
};

export default Signup;
