import React from "react";
import styled, { CSSProperties } from "styled-components";
import variables from "variables";

interface Props {
  text?: string;
  style?: CSSProperties;
  onClick: any;
}

const Button = ({ text = "Next", onClick, style }: Props): JSX.Element => (
  <div style={{ position: 'fixed', overflow: 'visible' }}>
    <Container style={style} onClick={onClick}>{text}</Container>
  </div>
);

export default Button;

const Container = styled.button<Props>`
  background: transparent;
  border: ${({ theme }) => `1px solid ${theme.fg}`};
  border-radius: 20px;
  color: ${({ theme }) => theme.fg};
  cursor: pointer;
  font-size: 40px;
  padding: 20px 40px;
  text-align: center;
  transition: all 150ms ease;
  &:hover {
    background: ${variables.white_primary};
    border: none;
    color: ${variables.black_tertiary};
    transform: scale(1.05);
    box-shadow: 0px 0px 5px 1px ${variables.black_secondary} inset;
    -webkit-box-shadow: 0px 0px 5px 1px ${variables.black_secondary} inset;
    -moz-box-shadow: 0px 0px 5px 1px ${variables.black_secondary} inset;
  }
  &:active {
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    opacity: 0.1;
  }
`;
