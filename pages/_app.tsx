import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { useWindowSize } from "react-use";
import Context, { TContext } from "context";
import Layout from "components/Layout/Layout";
import { THEMES, Theme } from "components/Layout/themes";
import variables from "variables";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [theme, setTheme] = useState<Theme>(THEMES[0/*Math.floor(Math.random() * THEMES.length)*/]);
  const { width } = useWindowSize();

  const handleSetTheme = (newTheme): void => {    
    if (newTheme) {
      setTheme(newTheme);
      return;
    };

    setTheme((theme): Theme => {
      if (THEMES.indexOf(theme) === THEMES.length - 1) {
        return THEMES[0];
      }
      return THEMES[THEMES.indexOf(theme) + 1];
    });
  };

  const context: TContext = useMemo(
    (): TContext => ({
      setCurrentSlide,
      currentSlide,
      theme,
      setTheme: handleSetTheme,
    }),
    [currentSlide, theme]
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
      fontFamily: 'Avenir',
      fontSize: '3em',
      gridArea: "main",
      height: "100vh",
      justifyContent: "center",
      margin: 0,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      textAlign: 'center',
      width: "100vw",
    }}
  >
    Desktop only for now 😭
  </div>
);
