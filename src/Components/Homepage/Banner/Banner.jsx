import React from "react";
// Import the actual cricket logo asset here.
import heroLogo from "../../../assets/banner-main.png";

const Banner = () => {
  return (
    // Correct multi-radial gradient from your successful attempt, with centered flex layout
    <div className="min-h-[60vh] bg-linear-to-r/longer from-indigo-500 to-teal-400 w-[90%] flex flex-col items-center justify-center gap-y-6 text-white text-center p-8 mx-auto">
      <div className="logo-container">
        <img
          className="w-32 md:w-48 h-auto"
          src={heroLogo}
          alt="Cricket Logo"
        />
      </div>
      <div className="content-container flex flex-col items-center gap-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          Beyond Boundaries Beyond Limits
        </p>
      </div>
    </div>
  );
};

export default Banner;
