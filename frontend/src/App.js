import React, { useState } from 'react';

import Header from './Header';

function App() {
  return (
  <div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
  </div>
  );
}

export default App;
