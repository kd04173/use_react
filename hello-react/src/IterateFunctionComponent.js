import React, { useState } from 'react';

const IterateFunctionComponent = () => {
  const [names, setNames] = useState([
    // 변수명은 스택, 값은 힙에 생성됨
    { id: 1, text: '김영진' },
    { id: 2, text: '이영진' },
    { id: 3, text: '박영진' },
  ]);
  const [inputTag, setInputTag] = useState('');
  const [nextId, setNextId] = useState(names.length + 1);

  const onChange = (event) => {
    setInputTag(event.target.value);
  };

  const onClick = () => {
    // setNames(names.push({ id: nextId, text: inputTag }));
    // 상태불변성: 객체 push()는 처리안됨, concat()만 가능: 새로운 배열을 만들어줌
    const newNames = names.concat({ id: nextId, text: inputTag });
    setNames(newNames);
    setNextId(nextId + 1);
    setInputTag('');
  };

  const RmItem = (id) => {
    // filter(): 새로운 배열을 만들어줌
    const newNames = names.filter((name, index) => {
      return name.id !== id;
    });
    setNames(newNames);
  };
  // map(): 새로운 배열을 만들어줌
  const namesList = names.map((name, index) => {
    return (
      <li
        key={name.id}
        onDoubleClick={(event) => {
          RmItem(name.id);
        }}
      >
        {name.text}
      </li>
    );
  });
  return (
    <>
      <h1>새로추가, 삭제</h1>
      <div>
        <input type="text" value={inputTag} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{namesList}</ul>
      </div>
    </>
  );
};

export default IterateFunctionComponent;
