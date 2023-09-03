import React from "react";

function AnimatedText({ firstName, lastName }) {
  return (
    <div className="max-lg:w-full max-lg:text-center">
      <h1>
        Hello, I{"'"}m <br />{" "}
        {/* <span className="text-[#9B83FF]">{firstName}</span>
        <br />
        <span className="text-[#9B83FF]">{lastName}</span> */}
      </h1>
      <h1 className="typewriter text-[#9B83FF] w-3/12 max-lg:w-full">
        {/* <span className="text-[#9B83FF]">{firstName}</span>
        <br />
        <span className="text-[#9B83FF]">{lastName}</span> */}
      </h1>
    </div>
    // <h1 aria-label="Hi! I'm a developer">
    //   Hi! I{"'"}m a&nbsp;<span className="typewriter"></span>
    // </h1>
  );
}

export default AnimatedText;
