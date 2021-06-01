import { useMemo, ReactNode } from "react";
import styled from "styled-components";
import TransitionWrapper from "components/TransitionWrapper";
import { useTransition } from "hooks";
import { TComponent } from "pages/index";

interface Props {
  componentMap: TComponent[];
  inProp: boolean;
}

const Template = ({ componentMap, inProp, ...props }: Props): JSX.Element => {
  const { transitionMap } = useTransition(componentMap, inProp, 200);

  const children = useMemo(
    (): ReactNode[] =>
      componentMap.map(
        ({ Component, id }: TComponent): ReactNode => (
          <TransitionWrapper key={id} inProp={transitionMap[id]}>
            <Component {...props} />
          </TransitionWrapper>
        )
      ),
    [componentMap, transitionMap]
  );

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
