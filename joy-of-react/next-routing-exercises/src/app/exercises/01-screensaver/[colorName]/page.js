import React from 'react';
import ScreenSaver from '../../../../components/ScreenSaver';

async function ScreenSaverPage({ params }) {
  const { colorName } = await params;

  return (
    <main className='screen-saver-wrapper'>
      <ScreenSaver color={colorName} />
    </main>
  );
}

export default ScreenSaverPage;
