import React, { useState } from 'react';
import NoteSort from './NoteSort';

export default function NoteList({ notes, onRemoveBtn }) {
  const [sortedNotes, setSortedNotes] = useState([...notes]);

  const sortNotes = (order) => {
    const sorted = [...notes]; // Tri des notes d'origine
    sorted.sort((a, b) => (order === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)));
    setSortedNotes(sorted);
  };

  // Génération des LI pour chaque note dans sortedNotes
  const listNotes = sortedNotes.map((note, index) => (
    <li key={index}>
      {note.text}
      &nbsp;
      <button onClick={() => onEditBtn(note)}>✏️</button> {/* Bouton Modifier */}
      &nbsp;
      <button onClick={(event) => onRemoveBtn(note)}>🗑</button>
    </li>
  ));

  return (
    <>
      <p>A NOTE LIST 📃</p>
      <NoteSort onSort={sortNotes} />
      <ul>{listNotes}</ul>
    </>
  );
}
