import React, { useState } from 'react';

// formulaire pour la modification d'une note
const EditNoteForm = ({ note, onUpdate }) => {
  const [text, setText] = useState(note.text);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onUpdate(note.id, { text });
      alert('Note mise à jour avec succès!');
    } catch (error) {
      alert('Erreur lors de la mise à jour de la note.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default EditNoteForm;
