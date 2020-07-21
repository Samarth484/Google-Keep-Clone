import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setNotesArr] = useState([]);
  function addNoteCard(newNoteCard) {
    setNotesArr(prevValues => [...prevValues, newNoteCard]);
  }
  function deleteNote(id) {
    setNotesArr(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onNewNote={addNoteCard} />
      {notesArr.map((val, index) => {
        return (
          <Note
            title={val.title}
            key={index}
            id={index}
            onDelClick={deleteNote}
            content={val.content}
          />
        );
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
