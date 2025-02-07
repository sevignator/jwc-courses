'use client'

import React from 'react';

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({children}) {
  const [soundEnabled, setSoundEnabled] = React.useState(false);

  function toggleSoundEnabled() {
    setSoundEnabled(!soundEnabled);
  }

  return (
    <SoundEnabledContext value={{soundEnabled, toggleSoundEnabled}}>
      {children}
    </SoundEnabledContext>
  )
}

export default SoundEnabledProvider;
