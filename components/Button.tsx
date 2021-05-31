import React from "react";
import styled from "styled-components";
import variables from "variables";

interface Props {
  text?: string;
  onClick: any;
}

const Button = ({ text = "Click", onClick }: Props) => (
  <Container onClick={onClick}>{text}</Container>
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
    background: ${variables.blue_offset};
    color: ${variables.white};
    transform: scale(1.05);
  }
  &:active {
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    opacity: 0.1;
  }
`;
