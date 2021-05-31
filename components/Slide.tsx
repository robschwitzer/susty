import styled from "styled-components";
import TransitionWrapper from "components/TransitionWrapper";
import { useTransition } from "hooks";

const Slide = ({ componentMap, inProp, ...props }): JSX.Element => {  
  const { transitionMap } = useTransition(componentMap, inProp, 200);

  const children = componentMap.map(({ Component, id }) => {
    return (
      <TransitionWrapper key={id} inProp={transitionMap[id]}>
        <Component {...props} />
      </TransitionWrapper>
    )
  });

  return <Container>{children}</Container>;
};

export default Slide;

const Container = styled.section`
  grid-area: main;
  height: 100%;
  margin: 20px;
`;
