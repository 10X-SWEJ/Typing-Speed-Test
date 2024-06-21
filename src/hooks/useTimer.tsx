import { useRef, useEffect, useState } from "react";

export const useTimer = function () {
  const [startCountdown, setStartCountdown] = useState(false);
  const [second, setSecond] = useState(0);
  const intervalId = useRef<null | number>(null); 

  useEffect(() => {
    if (startCountdown) {
      intervalId.current = setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000);
    } else {
      clearInterval(intervalId.current!);
      intervalId.current = null;
    }

    return () => {
      clearInterval(intervalId.current!);
    };
  }, [startCountdown]);

  return { second, setStartCountdown };
};
