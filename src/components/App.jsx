import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setNotesArr] = useState([]);
  function addNoteCard(newNoteCard) {
    setNotesArr(prevValues => [...prevValues, notesArr]);
  }
  return (
    <div>
      <Header />
      <CreateArea onNewNote={addNoteCard} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
