import React from "react";
import Search from "../pages/Search";
import User from "./User";
import Logos from "../pages/Logo";

import "../styles/Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Logos size="3rem"/>
      <Search />
      <User />
    </div>
  );
};

export default Header;
