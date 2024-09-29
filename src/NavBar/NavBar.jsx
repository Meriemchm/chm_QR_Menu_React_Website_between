import React,{useState,useEffect} from "react";

const NavBar = () => {

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 md:px-20 bg-primary fixed z-10`}
    >
      <div>
        <h1
          className={`tinos-regular font-extrabold text-3xl md:text-4xl text-second `}
        >
          Havana Coffee
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
