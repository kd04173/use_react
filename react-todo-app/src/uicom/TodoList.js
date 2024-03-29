import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';

const TodoLIst = ({ todos, onRemove, onToggle }) => {
  const listItemRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={listItemRender}
      list={todos}
      style={{ outline: 'none' }}
    ></List>
  );
};

export default React.memo(TodoLIst);
