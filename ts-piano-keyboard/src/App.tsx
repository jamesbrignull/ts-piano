import React from 'react';
import { notes } from './helpers';
import Octave from './Octave';

function App() {
  return (
    <div>
      <Octave notes={notes} />
    </div>
  );
}

export default App;
