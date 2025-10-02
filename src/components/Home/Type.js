import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-2xl font-semibold">
      <span className="text-gray-300">I specialize in </span>
      <Typewriter
        options={{
          strings: [
            "Full Stack Development",
            "AI-Powered Solutions",
            "TypeScript & React.js",
            "Node.js & Python",
            "AWS Cloud Architecture",
            "Machine Learning Integration",
            "SaaS Application Development",
            "Document Processing AI",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 80,
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(80)
            .start();
        }}
      />
    </div>
  );
}

export default Type;
