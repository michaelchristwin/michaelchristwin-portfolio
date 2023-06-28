import { useLayoutEffect, useRef } from "react";

function Hero() {
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);

  useLayoutEffect(() => {
    const animateLines = (ref: any, delay: any) => {
      const node = ref.current;
      setTimeout(() => {
        node.classList.add("typing");
      }, delay);
    };

    animateLines(firstLineRef, 0);
    animateLines(secondLineRef, 1700);
    animateLines(thirdLineRef, 3200);
  }, []);

  return (
    <div className="hero lg:block flex">
      <div>
        <span ref={firstLineRef} className="block wel">
          Welcome to my portfolio
        </span>
        <span ref={secondLineRef} className="block front">
          {`I'm a Frontend`}
        </span>
        <span ref={thirdLineRef} className="block front">
          Developer
        </span>
      </div>
    </div>
  );
}

export default Hero;
