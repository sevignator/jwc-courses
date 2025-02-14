import React from 'react';

import Link from 'next/link';

function ScreenSaverExercise() {
  const colors = ['lavender', 'slateblue', 'hotpink', 'white'];

  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        {colors.map((color) => (
          <li>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
