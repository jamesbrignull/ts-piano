import React from 'react';
import { NoteType } from './helpers';
import Note from './Notes';

type Props = {
  notes: NoteType[];
};

const Octave: React.FC<Props> = ({ notes }) => {
  return (
    <div>
      {notes.map((element: NoteType) => (
        <Note key={element.note} color={element.color} note={element.note} />
      ))}
    </div>
  );
};

export default Octave;
