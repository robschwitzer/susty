import { ReactNode, useContext, useMemo } from "react";
import Head from "next/head";
import Sidebar from "components/Sidebar";
import TransitionWrapper from "components/TransitionWrapper";
import context, { TContext, TComponent } from "context";

const Home = (): ReactNode => {
  const { currentSlide, currentStack } = useContext<TContext>(context);

  const children = useMemo((): ReactNode[] => currentStack.map(
    ({ Component, id }: TComponent): ReactNode => (
      <TransitionWrapper key={id} inProp={id === currentSlide}>
        <Component inProp={id === currentSlide} />
      </TransitionWrapper>
    )
  ), [currentSlide, currentStack]);

  return (
    <>
      <Head>
        <title>Sphere - Sustainabiliy</title>
        <meta property="og:title" content="Sphere - Sustainabiliy Challenge" />
        <meta property="og:description" content="On our path to Net Zero, here are some things that we, as Sphereians, can do to move the needle" />
        <meta property="og:image" content="/photo-1515344905723-babc01aac23d.jpeg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Sidebar />
      {children}
    </>
  );
};

export default Home;
