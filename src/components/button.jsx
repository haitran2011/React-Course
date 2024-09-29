import React from 'react'
import styled, { css } from 'styled-components';

// ${props => props.gradient && css`
//   background-image: linear-gradient(53deg, #3598FE 0%, #0763E0 100%);
// `}

// ${props => props.backgroundColor && css`
//   background-color: ${props => props.backgroundColor};
// `}

const ButtonStyled = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  border: ${props => props.border || 'none'};
  padding: ${props => props.padding || '8px 20px'};
  color: ${props => props.textColor || '#000'};
  border-radius: ${props => props.borderRadius || "5px"};
  min-width: ${props => props.minWidth || '84px'};
  ${props => props.isGradient && css`
    background-image: linear-gradient(53deg, #3598FE 0%, #0763E0 100%);
  ` }

`;

const Button = React.forwardRef(({ text = "Button Text", ...restProps }, ref) => {
  return (
    <ButtonStyled {...restProps} ref={ref}>{text}</ButtonStyled>
  )
})

// function Button({ text = "Button Text", ...restProps }) {
//   return (
//     <ButtonStyled {...restProps}>{text}</ButtonStyled>
//   )
// }

export default Button