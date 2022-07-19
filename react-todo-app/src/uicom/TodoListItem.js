import React from 'react';
import './TodoListItem.scss';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo: { text, checked, id }, onRemove, onToggle }) => {
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? (
          <MdCheckBox onClick={() => onToggle(id)} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => onToggle(id)} />
        )}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

// export default TodoListItem;
export default React.memo(TodoListItem);
