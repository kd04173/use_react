import React from 'react';
// import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// CSS Module 사용시
// className={styles.클래스이름}
// :global 로 정의한 클래스
// className="클래스이름" 형태로 사용
const CSSModule = () => {
  return (
    <>
      {/*<div className={styles.wrapper}>*/}
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something"> CSS Module!</span> 입니다
      </div>
      <div className={cx('wrapper', 'inverted')}>
        안녕하세요, 저는{' '}
        <span className="something"> CSS Module + classnames!</span> 입니다
      </div>
      <div className={cx('wrapper', 'inverted')}>
        안녕하세요, 저는 <span className="jit_cls"> CSS Module + Sass!</span>{' '}
        입니다
      </div>
    </>
  );
};

export default CSSModule;
