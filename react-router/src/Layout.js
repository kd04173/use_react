import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate('/articles', { replace: true }); // redirection 구현
  };

  return (
    <>
      <div>
        <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goArticles}>게시글 목록</button>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">홈으로</Link>
            </li>
            <li>
              <Link to="/about">회사소개</Link>
            </li>
            <li>
              <Link to="/info?detail=true&mode=1">회사소개(쿼리)</Link>
            </li>
            <li>
              <Link to="/profile/velopert">개발자 프로필</Link>
            </li>
            <li>
              <Link to="/profile/gildong">홍길동 프로필</Link>
            </li>
            <li>
              <Link to="/profile/void">존재하지않는 프로필</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/mypage">내페이지</Link>
            </li>
          </ul>
          <hr />
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
