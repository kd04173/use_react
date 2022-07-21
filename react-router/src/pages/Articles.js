import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const Articles = [
    { id: 1, text: '게시글1' },
    { id: 2, text: '게시글2' },
    { id: 3, text: '게시글3' },
  ];
  return (
    <div>
      <Outlet />
      <ul>
        {Articles.map((Article) => (
          <ArticleItem id={Article.id} text={Article.text} />
        ))}
      </ul>
    </div>
  );
};
const ArticleItem = ({ id, text }) => {
  const myStyle = {
    backgroundColor: 'red',
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? myStyle : undefined)}
      >
        {text}
      </NavLink>
    </li>
  );
};
export default Articles;
