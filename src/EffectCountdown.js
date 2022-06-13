import { useState, useEffect } from "react";

function EffectCountDown() {
  const [countdown, setCountdown] = useState(1);
  // const [streamInterval, setStreamInterval] = useE;

  useEffect(() => {
    const loopCountdown = setInterval(() => {
      console.log(countdown);
      setCountdown((state) => {
        if (state === 100) {
          clearInterval(loopCountdown);
        }
        return state + 1;
      });
    }, 100);
    return () => {};
  }, [countdown]);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}

export default EffectCountDown;
