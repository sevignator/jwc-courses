import React from 'react';
import Avatar from './Avatar.tsx';

type Avatar = {
  id: string;
  src: string;
  alt: string;
};

const avatars: Avatar[] = [
  {
    id: crypto.randomUUID(),
    src: 'https://sandpack-bundler.vercel.app/img/avatars/001.png',
    alt: 'person with curly hair and a black T-shirt',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://sandpack-bundler.vercel.app/img/avatars/002.png',
    alt: 'person wearing a hijab and glasses',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://sandpack-bundler.vercel.app/img/avatars/003.png',
    alt: 'person with short hair wearing a blue hoodie',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://sandpack-bundler.vercel.app/img/avatars/004.png',
    alt: 'person with a pink mohawk and a raised eyebrow',
  },
];

function App() {
  return (
    <div className='avatar-set'>
      {avatars.map((avatar) => (
        <Avatar key={avatar.id} src={avatar.src} alt={avatar.alt} />
      ))}
    </div>
  );
}

export default App;
