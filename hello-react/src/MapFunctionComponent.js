import React from 'react';

const MapFunctionComponent = () => {
  const fruits = [
    '🥝',
    '🥥',
    '🍇',
    '🍈',
    '🍉',
    '🍊',
    '🍋',
    '🍌',
    '🍍',
    '🥭',
    '🍎',
    '🍏',
    '🍐',
    '🍑',
  ];
  const fruitsLi = fruits.map((fruit, index) => {
    return <li key={index}>{fruit}</li>;
  });

  return (
    <>
      <h1>map() 연습</h1>
      <div>
        <ul>{fruitsLi}</ul>
      </div>
    </>
  );
};

export default MapFunctionComponent;
