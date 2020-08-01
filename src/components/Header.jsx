import React from "react";
import Zoom from '@material-ui/core/Zoom';
function Header() {
  return (
    <header>
      <Zoom in={true}><h1>Google Keep Clone</h1></Zoom>
    </header>
  );
}

export default Header;
