import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "C++/Java Coder",
          "Entrepreneur",
          "MERN Stack Developer",
          "Exploring business and ML"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
