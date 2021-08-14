import React, { MouseEvent } from 'react';
import { notes } from './helpers';
import Octave from './Octave';

function App() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };

  return (
    <div>
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  );
}

export default App;
