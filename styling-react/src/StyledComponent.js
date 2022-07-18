import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// Object.keys(sizes): [desktop,tablet]
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

// Box: 컴포넌트 뒤에는 컴포넌트의 div형태의 스타일
const Box = styled.div`
  // props: Box의 props
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex; // flex

  width: 1024px;
  margin: 0 auto;
  //@media (max-width: 1024px) {
  //  width: 768px;
  //}
  //@media (max-width: 768px) {
  //  width: 100%;
  //}
  ${media.desktop`width:768px;`};
  ${media.tablet`width:100%; background: red;`};
`;

// Button: 컴포넌트 뒤에는 컴포넌트의 button형태의 스타일
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 30px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 5rem;
  }
`;

/*
const MyInput = styled('input')`
  background: gray;
`;

const StyledLink = styled('Link')`
  color: blue;
`;
===> const Link = ({className}) => {
  return(
    <>
      <div className={className}>테스트</div>
    </>
  )
}
*/
const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
