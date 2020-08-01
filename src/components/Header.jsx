import React from "react";
import Zoom from '@material-ui/core/Zoom';
import HighlightTwoToneIcon from '@material-ui/icons/HighlightTwoTone';
import HighlightRoundedIcon from '@material-ui/icons/HighlightRounded';
function Header() {
  return (
    <header>
      <Zoom in={true}><h1><HighlightRoundedIcon/>Google Keep Clone</h1></Zoom>
    </header>
  );
}

export default Header;
