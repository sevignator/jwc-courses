import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  status?: 'default' | 'danger' | 'success';
};

function Button({ children, status = 'default' }: ButtonProps) {
  const statusColors = {
    default: 'black',
    danger: 'red',
    success: 'green',
  };

  return (
    <button
      style={{
        border: '2px solid',
        color: statusColors[status],
        borderColor: statusColors[status],
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
