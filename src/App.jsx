import React from "react";
import NavBar from "./NavBar/NavBar";
import Menu from "./Menu/Menu";
import NavBarMenu from "./NavBarMenu/NavBarMenu";

const App = () => {
  return (
    <div>
      <NavBar />
      <NavBarMenu />
      <Menu />
    </div>
  );
};

export default App;
