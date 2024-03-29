import React, { Component } from 'react';
import ColorContext from '../context/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;

  onClick = (color) => {
    this.context.actions.setColor(color);
  };

  onContextMenu = (color) => {
    this.context.actions.setSubcolor(color);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.onClick(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.onContextMenu(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
