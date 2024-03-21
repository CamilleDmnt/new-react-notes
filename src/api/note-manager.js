import { Note } from '../models/note';

const BASE_API_URL = import.meta.env.VITE_BACKEND_URL + '/notes/';

export class NoteManager {

  static async list() {
    // le return est important
    return fetch(BASE_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": NoteManager.token
      }
    })
    .then(response => response.json())
    .then(notesData => notesData.map(note => new Note(note.id, note.text)))
    // voir https://javascript.info/promise-error-handling
    .catch(error => window.alert(error))
  }

  static async create(note) {
    const response = await fetch(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": NoteManager.token
      },
      body: JSON.stringify(note)
    });
    const data = await response.json();
    return data;
  }

  static async update(id, updatedNote) {
    const response = await fetch(BASE_API_URL + id, {
      method: "PUT", // Utilisation de la méthode PUT pour la mise à jour
      headers: {
        "Content-Type": "application/json",
        "Authorization": NoteManager.token
      },
      body: JSON.stringify(updatedNote) // Envoyer les données mises à jour au serveur
    });
    const data = await response.json(); // Attendre la réponse du serveur
    return data; // Renvoyer les données mises à jour
  }


  static async remove(id) {
    const response = await fetch(BASE_API_URL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": NoteManager.token
      }
    });
    const data = await response.json();
    return data;
  }
}
