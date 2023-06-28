import { useEffect, useRef, useState } from "react";

function Hero() {
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const animateLines = () => {
      setTimeout(() => {
        setAnimationStarted(true);
      }, 100); // Delay the animation start by 100ms
    };

    animateLines();
  }, []);

  return (
    <div className="hero lg:block flex">
      <div>
        <span
          ref={firstLineRef}
          className={`block wel ${animationStarted ? "typing" : ""}`}
        >
          Welcome to my portfolio
        </span>
        <span
          ref={secondLineRef}
          className={`block front ${animationStarted ? "typing" : ""}`}
        >
          {`I'm a Frontend`}
        </span>
        <span
          ref={thirdLineRef}
          className={`block front ${animationStarted ? "typing" : ""}`}
        >
          Developer
        </span>
      </div>
    </div>
  );
}

export default Hero;
