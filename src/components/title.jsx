import React from 'react'
import styled from 'styled-components';

const HeadingTitleStyled = styled.h5`
  font-weight: ${props => props.isBold ? "bold" : "normal"};
  text-decoration: underline;
`


const LinkStyled = styled.a`
  position: relative;
  text-decoration: none;
  height: 20px;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-right: 35px;
  cursor: pointer;
  font-weight: ${props => (props.active ? 600 : "normal")};
  color: ${props => (props.active ? "#5596e6" : "#5a6872")};
`;

function Title({ text, isBold = true }) {
  return (
    <HeadingTitleStyled isBold={isBold}>
      {/* <a 
        className="aTitle"
        style={{
          fontWeight: active ? 600 : "normal",
          color: active ? "#5596e6" : "#5a6872",
          fontSize: isSmall ? '10px' : '20px'
        }}
      >{text}</a> */}
      <LinkStyled>{text}</LinkStyled>
    </HeadingTitleStyled>
  )
}

export default Title