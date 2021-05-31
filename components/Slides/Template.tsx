import { useMemo } from "react";
import styled from "styled-components";
import TransitionWrapper from "components/TransitionWrapper";
import { useTransition } from "hooks";

const Template = ({ componentMap, inProp, ...props }): JSX.Element => {  
  const { transitionMap } = useTransition(componentMap, inProp, 200);

  const children = useMemo(() => componentMap.map(({ Component, id }) => (
    <TransitionWrapper key={id} inProp={transitionMap[id]}>
      <Component {...props} />
    </TransitionWrapper>
  )), [componentMap, transitionMap]);

  return <Container>{children}</Container>;
};

export default Template;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: main;
  height: 100%;
  justify-content: space-evenly;
  & > {
    :nth-child(even) {
      margin: 40px 0;
    }
  }
`;
