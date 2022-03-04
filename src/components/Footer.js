import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col bg-gray-600 text-white items-center p-10">
      <div className="grid grid-rows-4  md:grid-rows-none lg:grid-cols-4 gap-5">
        <div className="flex flex-col justify-between h-full">
          <div>DISCLAIMER</div>
          <img src="/eu.jpg" alt="european union" />
        </div>
        <p className="text-justify">
          This website was realised for the project “BRinging STEM into Active
          agINg” in the framework of the European programme “Erasmus Plus KA2
          Strategic Partnerships for innovation and the exchange of good
          practices.
        </p>
        <p className="text-justify">
          This project has been funded with support from the European
          Commission. <br /> <br /> Project code: 2020-1-PL01-KA204-081805
        </p>
        <p className="text-justify">
          This publication reflects the views only of the author, and the
          Commission cannot be held responsible for any use which may be made of
          the information contained therein.
        </p>
      </div>
      <hr className="w-full h-0.5 my-5 bg-slate-300 " />
      <h1>Copyright © 2022 BRAIN</h1>
    </footer>
  );
}

export default Footer;
