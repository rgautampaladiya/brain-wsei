import React from "react";

function IndexScreen() {
  return (
    <div className="flex items-center flex-col px-5 pb-5 ">
      <h1 className="text-3xl font-bold font-sans my-5 text-gray-700">
        Project Summary
      </h1>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-5 ">
        <p className="text-justify">
          “BRinging STEM into Active agINg” (BRAIN) is a Strategic Partnership
          project aimed at training Scientific Researchers to convey scientific
          knowledge and skills to elder Adults engaging them in an active aging
          process as well as taking an active educational role towards their
          peers and the other population bands which will foster their social
          inclusion.
          <br />
          <br />
          “BRAIN” project is envisaged to transmit a substantial and sustainable
          impact: elder Adults involved in the Local Programme after having
          acquired new knowledge and skills will act as learning outcomes
          replicators which will raise their self-esteem as well as fostering
          their social inclusion in the society while partner organizations will
          acquire new educational methodologies that can be translated in other
          sectors.
        </p>
        <img src="/brain-1.png" alt="" />
      </div>
    </div>
  );
}

export default IndexScreen;
