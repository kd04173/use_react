import React from 'react';
import classNames from 'classnames';

const ClassNamesTestComponent = ({ clsTest, theme }) => {
  return (
    <>
      <div className={classNames('MyCls', { clsTest }, theme)}></div>
      <div className={`MyCls ${theme} ${clsTest ? 'clsTest' : ''} `}></div>
    </>
  );
};

export default ClassNamesTestComponent;
