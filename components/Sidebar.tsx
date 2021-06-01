import styled from "styled-components";
import { useContext } from "react";
import context, { TContext } from "context";
import variables from "variables";

interface Props {

}

const Sidebar = (): JSX.Element => {
  return (
    <Container> 
      {/*  */}
    </Container>
  )
}

export default Sidebar;

const Container = styled.section<Props>`
  display: flex;
  grid-area: sidebar;
  height: 100%;
`;
