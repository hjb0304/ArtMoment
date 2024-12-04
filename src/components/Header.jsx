import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "./Button";

function Header() {
  return (
    <header className="header w-full h-20 flex justify-between items-center font-bold px-24 border-b-2 border-secondary">
      <h1 className="text-primary">ArtMoments</h1>
      <div className="search flex items-center h-11">
        <input type="text" className="input" />
        <Button isIcon>
          <SvgIcon component={SearchIcon}></SvgIcon>
        </Button>
      </div>
    </header>
  );
}

export default Header;
