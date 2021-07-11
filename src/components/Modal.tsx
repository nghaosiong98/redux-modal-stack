import React, { FC } from 'react';

const Modal: FC = ({ children }) => {
  return (
    <>
      <div
        style={{
          zIndex: 50,
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0,0,0,0.4)',
          overflow: 'auto',
          paddingTop: '5%',
        }}
      >
        <div
          style={{
            zIndex: 51,
            background: 'white',
            margin: 'auto',
            padding: '20px',
            width: '80%',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
