import React, { useState } from 'react';

const NoteSort = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortByText = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <button onClick={sortByText}>
      {sortOrder === 'asc' ? 'Trier par ordre décroissant' : 'Trier par ordre croissant'}
    </button>
  );
};

export default NoteSort;
