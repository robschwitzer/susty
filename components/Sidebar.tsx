import styled from "styled-components";
import { useContext } from "react";
import context, { TContext } from "context";
import variables from "variables";
import TransitionWrapper from "components/TransitionWrapper";

interface Props {
  inProp: boolean;
}

const Sidebar = ({ inProp }: Props): JSX.Element => {
  return (
    <TransitionWrapper inProp={inProp} styles={{ gridArea: 'sidebar' }}>
      <Container>
        {/*  */}
      </Container>
    </TransitionWrapper>
  )
}

export default Sidebar;

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  grid-area: sidebar;
  // height: 100%;
  padding-top: 10vh;
  &:nth-child(even) {
    margin: 40px 0;
  }
`;
