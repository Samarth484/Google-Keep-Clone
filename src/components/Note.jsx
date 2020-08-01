import React from "react";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Fab from "@material-ui/core/Fab";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}><DeleteSweepIcon/></Fab>
    </div>
  );
}

export default Note;
