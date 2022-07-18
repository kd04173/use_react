import React, { useState } from 'react';

const Main = (props) => {
  const { loggedIn } = props;
  const [contents, setContents] = useState([]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(1);

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const sendContent = () => {
    const newContent = contents.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setContents(newContent);
    setInputText('');
  };
  const inputList = contents.map((content, index) => (
    <div key={content.id}>{content.text}</div>
  ));
  return (
    <div>
      {loggedIn && (
        <div>
          <label htmlFor="content">게시글</label>
          <textarea
            name="inputText"
            id=""
            cols="50"
            rows="30"
            value={inputText}
            onChange={onChange}
          ></textarea>
          <button onClick={sendContent}>입력</button>
          <span>{inputText}</span>
        </div>
      )}

      <div>{inputList}</div>
    </div>
  );
};

export default Main;
