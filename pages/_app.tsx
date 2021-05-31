import type { AppProps } from "next/app";
import { useCallback, useMemo, useState } from "react";
import { useWindowSize } from "react-use";
import Context, { TContext } from "context";
import Layout from "components/Layout/Layout";
import { THEMES, Theme } from "components/Layout/themes";
import variables from "variables";

const App = ({ Component, pageProps }: AppProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [theme, setTheme] = useState<Theme>(THEMES["dark"]);
  const { width } = useWindowSize();

  const context: TContext = useMemo(
    (): TContext => ({
      setCurrentSlide,
      currentSlide,
      theme,
      setTheme,
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

const Waahhh = () => (
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
    Desktop only, for now 😭
  </div>
);
