import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoTemplate from './uicom/TodoTemplate';
import TodoInsert from './uicom/TodoInsert';
import TodoList from './uicom/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 연습1', checked: true },
    { id: 2, text: '리액트 연습2', checked: true },
    { id: 3, text: '리액트 연습3', checked: false },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        }),
      );
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
        }),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
