import type { AppProps } from "next/app";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useWindowSize } from "react-use";
import Context, { TContext, TComponent } from "context";
import Layout from "components/Layout/Layout";
import { THEMES, Theme } from "components/Layout/themes";
import variables from "variables";
import { Intro1, Intro2, Intro3 } from "components/Slides/Intro";
import { Main1, Main2, Main3, Main4, Main5, Main6, Main7 } from "components/Slides/Main";

export const STACK_NAMES = {
  INTRO: "intro",
  MAIN: "main"
} as { [key: string]: string; }

const introComponents: TComponent[] = [
  { Component: Intro1 },
  { Component: Intro2 },
  { Component: Intro3 },
].map((o: any, id: number): TComponent => Object.assign(o, { id, stackName: STACK_NAMES.INTRO }));

const mainComponents: TComponent[] = [
  { Component: Main1 },
  { Component: Main2 },
  { Component: Main3 },
  { Component: Main4 },
  { Component: Main5 },
  { Component: Main6 },
  { Component: Main7 },
].map((o: any, id: number): TComponent => Object.assign(o, { id, stackName: STACK_NAMES.MAIN }));

export const componentMaps: TComponent[][] = [introComponents, mainComponents];

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { width } = useWindowSize();
  const [theme, setTheme] = useState<Theme>(THEMES[0]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [currentSlide, _setCurrentSlide] = useState<number>(0);
  const [currentStack, _setCurrentStack] = useState<TComponent[]>(
    componentMaps[0]
  );

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [isTransitioning])

  const handleSetTheme = useCallback((newTheme: Theme): void => {
    if (newTheme) {
      setTheme(newTheme);
      return;
    }

    setTheme((theme: Theme): Theme => {
      if (THEMES.indexOf(theme) === THEMES.length - 1) {
        return THEMES[0];
      }
      return THEMES[THEMES.indexOf(theme) + 1];
    });
  }, []);

  const setCurrentSlide = useCallback(
    (slide) => {
      window.scrollTo(0, 0);
      _setCurrentSlide(slide);
    },
    [_setCurrentSlide]
  );

  const setCurrentStack = useCallback((stack?: TComponent[], slide?: string) => {
    window.scrollTo(0, 0);
    setIsTransitioning(true);
    if (slide) {
      _setCurrentSlide(Number(slide));
    }
    
    if (stack) {
      _setCurrentStack(stack);
      return;
    }

    _setCurrentStack((stack) => {
      const index = componentMaps.indexOf(stack);
      if (index + 1 < componentMaps.length) return componentMaps[index + 1];
      return stack;
    });
  }, [_setCurrentStack]);

  const context: TContext = useMemo(
    (): TContext => ({
      setCurrentSlide,
      setCurrentStack,
      setTheme: handleSetTheme,
      currentSlide,
      currentStack,
      showSidebar: !isTransitioning,
      theme,
    }),
    [currentSlide, currentStack, theme, isTransitioning]
  );

  if (width < variables.breakpoints.medium) {
    return <Waahhh />;
  }

  return (
    <Context.Provider value={context}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
};
export default App;

const Waahhh = (): JSX.Element => (
  <div
    style={{
      alignItems: "center",
      background: variables.blue_secondary,
      color: variables.white,
      display: "flex",
      fontFamily: "Avenir",
      fontSize: "3em",
      gridArea: "main",
      height: "100vh",
      justifyContent: "center",
      margin: 0,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      textAlign: "center",
      width: "100vw",
    }}
  >
    Desktop only for now 😭
  </div>
);
