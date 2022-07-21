import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layout from './Layout';

const App = () => {
  return (
    <>
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
      </ul>
      <hr />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
