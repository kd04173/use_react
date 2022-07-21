import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };
  const onModePlus = () => {
    setSearchParams({
      mode: mode === (null || 'null') ? 1 : parseInt(mode) + 1,
      detail,
    });
  };

  const onModeMinus = () => {
    setSearchParams({
      mode: mode === null ? 1 : parseInt(mode) - 1,
      detail,
    });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>우리는 일본IT과 프로그래밍반 입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onDetail}>Detail</button>
      <button onClick={onModePlus}>Mode + 1</button>
      <button onClick={onModeMinus}>Mode - 1</button>
    </div>
  );
};

export default About;
