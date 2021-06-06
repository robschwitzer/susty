import { useEffect, useMemo, useState, ReactNode } from "react";
import styled from "styled-components";
import TransitionWrapper from "components/TransitionWrapper";
import { useTransition } from "hooks";
import { TComponent } from "context";

interface Props {
  componentMap: TComponent[];
  inProp: boolean;
}

const Template = ({ componentMap, ...props }: Props): JSX.Element => {
  const { transitionMap } = useTransition(componentMap, props.inProp, 200);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect((): void => {
    if (props.inProp !== isMounted) {
      setTimeout((): void => {
        setIsMounted(props.inProp)
      }, 400);
    }
  }, [props.inProp])

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

  if (!isMounted) return null;
  return <Container>{children}</Container>;
};

export default Template;

const Container = styled.section`
  grid-area: main;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  & > {
    :nth-child(even) {
      margin: 40px 0;
    }
    :last-child {
      margin-bottom: 25vh;
    }
  }
`;
