import styled from "styled-components";
import { useContext } from "react";
import context, { TContext } from "context";
import variables from "variables";

interface Props {
  isMenuOpen: boolean;
}

const Sidebar = ():JSX.Element => {
  const { isMenuOpen } = useContext<TContext>(context);
  return (
    <Container isMenuOpen={isMenuOpen}> 
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