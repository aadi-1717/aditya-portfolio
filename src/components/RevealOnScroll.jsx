import React, { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null); //NOTE1: Creates a ref that will store a reference to the component's actual DOM element.

  useEffect(() => {
    const observer = new IntersectionObserver( //NOTE2: Creates an observer that detects when an element enters or leaves the visible area.
      ([entry]) => {
        if (entry.isIntersecting) {
          //NOTE3: Checks whether the element has entered the observed area.
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootmargin: "0px 0px -50px 0px" }, //NOTE4:Configures the observer to trigger when about 20% of the element enters the adjusted viewing area, with the bottom boundary moved up by 50px.
    );
    if (ref.current) observer.observe(ref.current); //NOTE5: If the DOM element exists, tells the observer to start watching it.
    return () => observer.disconnect(); //NOTE6: Stops the observer when the component is removed or the effect is cleaned up.
  });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
