import { Transition } from "react-transition-group";
import styled from "styled-components";

export const TIMEOUT: number = 500;

const TransitionWrapper = ({
  children,
  inProp,
  styles,
  timeout = TIMEOUT,
}: Props): JSX.Element => (
  <Transition in={inProp} timeout={timeout} appear={true}>
    {(state: string) => (
      <AnimatedWrapper styles={styles} state={state}>
        {children}
      </AnimatedWrapper>
    )}
  </Transition>
);

interface Props {
  children: any;
  inProp: boolean;
  styles?: object;
  timeout?: number;
}

type TransitionStyle = React.CSSProperties;

export interface TransitionStyles {
  entering: TransitionStyle;
  entered: TransitionStyle;
  exiting: TransitionStyle;
  exited: TransitionStyle;
}

interface StyleProps {
  styles?: TransitionStyle;
  state: string;
}

export const defaultTransitionStyles: TransitionStyles = {
  entering: { opacity: 0, transform: `translateX(-300px)` },
  entered: { opacity: 1, transform: `translateX(0)` },
  exiting: { opacity: 0, transform: `translateY(150px)` },
  exited: { opacity: 0, transform: `translateX(300px)` },
};

const AnimatedWrapper = styled.div`
  grid-area: ${({ styles }) => styles && styles.gridArea ? styles.gridArea : 'main'};
  transition: all 500ms ease-out;
  ${({ state, styles }: StyleProps) =>
    styles
      ? { ...defaultTransitionStyles[state], ...styles[state] }
      : defaultTransitionStyles[state]};
`;

TransitionWrapper.displayName = "TransitionWrapper";

export default TransitionWrapper;
