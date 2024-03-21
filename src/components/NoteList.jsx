import React, { useState } from 'react';
import NoteSort from './NoteSort';
import EditNoteForm from './EditNoteForm';

export default function NoteList({ notes, onRemoveBtn }) {
  const [sortedNotes, setSortedNotes] = useState([...notes]);
  const [editingNote, setEditingNote] = useState(null); // État pour suivre quelle note est en cours d'édition

  const sortNotes = (order) => {
    const sorted = [...notes]; // Tri des notes d'origine
    sorted.sort((a, b) => (order === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)));
    setSortedNotes(sorted);
  };

  const onEditBtn = (note) => {
    setEditingNote(note); // Définissez la note en cours d'édition lorsque le bouton Modifier est cliqué
  };

  const onCancelEdit = () => {
    setEditingNote(null); // Annuler l'édition en remettant la note en cours d'édition à null
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
      {/* Afficher le formulaire de modification si une note est en cours d'édition */}
      {editingNote && (
        <EditNoteForm
          note={editingNote}
          onUpdate={(id, updatedNote) => {
            // Logique de mise à jour ici
            onCancelEdit(); // Réinitialisez l'état d'édition après la mise à jour
          }}
          onCancel={onCancelEdit} // Passez une fonction pour annuler l'édition
        />
      )}
    </>
  );
}
