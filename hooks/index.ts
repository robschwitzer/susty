import { useEffect, useRef, useState } from "react";

export const useInterval = (callback, delay, clear): void => {
  const savedCallback = useRef<Function | null>(null);

  // Remember the latest callback.
  useEffect((): void => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = (): void => savedCallback.current();

    const id = setInterval(interval, delay);
    if (clear) clearInterval(id);
    return () => clearInterval(id);
  }, [delay, clear]);
};

/* INFO: useTransition is used to animate react components in at an interval */
interface TransitionMap {
  transitionMap: boolean[];
}

export const useTransition = (
  items: any[],
  inProp: boolean,
  timeout: number
): TransitionMap => {
  const [transitionMap, setMap] = useState<TransitionMap["transitionMap"]>(
    new Array(items.length).fill(false)
  );

  useEffect(() => {
    return (): void => {
      if (!inProp && transitionMap.every(Boolean)) {
        setMap(transitionMap.map((): boolean => false));
      }
    };
  }, [inProp, transitionMap]);

  useInterval(
    (): void => {
      const index: number = transitionMap.findIndex((item): boolean => !item);
      const map: boolean[] = transitionMap;
      map[index] = true;
      setMap([...map]);
    },
    timeout,
    transitionMap.every(Boolean)
  );

  return { transitionMap };
};
