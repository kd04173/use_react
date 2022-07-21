import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';

const Home = () => {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>홈페이지 내용 작성 중...</p>
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/about">회사소개</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Home;
