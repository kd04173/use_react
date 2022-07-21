import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [todo, setTodo] = useState(null);

  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(({ data }) => {
  //       setTodo(data);
  //     });
  // };

  const onClick = async () => {
    try {
      const { data } = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=1c7bf7f6e952463d93c6b8cecc13d642',
      );
      setTodo(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>todo 정보 로드</button>
      </div>
      {todo && (
        <textarea
          rows={7}
          value={JSON.stringify(todo, null, 2)}
          readOnly={true}
        ></textarea>
      )}
    </div>
  );
};

export default App;
