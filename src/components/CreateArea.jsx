import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(preValues => ({ ...preValues, [name]: value }));
  }
  function onAdd() {
    Event.preventDefault();
    props.onNewNote(note);
    // console.log(note);
    
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
