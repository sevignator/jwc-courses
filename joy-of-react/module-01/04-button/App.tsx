import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <Button status='danger'>Cancel</Button>
      <Button status='success'>Confirm</Button>
      <Button>Clear</Button>
    </div>
  );
}

export default App();
