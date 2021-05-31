import type { AppProps } from "next/app";
import { useState } from "react";
import Context, { TContext } from "context";

import Layout from "components/Layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleChangeSlide = (direction: string): void => {
    setCurrentSlide((current: number) =>
      direction === "next" ? current + 1 : current - 1
    );
  };

  const context: TContext = {
    isMenuOpen,
    setMenuOpen,
    handleChangeSlide,
    currentSlide,
  };

  return (
    <Context.Provider value={context}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
};
export default App;
