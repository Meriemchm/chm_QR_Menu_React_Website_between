import React,{useState,useEffect} from "react";

const NavBar = () => {

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 md:px-20 bg-second fixed z-10`}
    >
      <div>
        <h1
          className={`coffee_name  text-3xl md:text-4xl text-primary `}
        >
          BETWEEN US
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
