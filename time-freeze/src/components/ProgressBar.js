import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <h2>Progress</h2>
      <div style={{ background: '#ddd', height: '20px', width: '100%' }}>
        <div 
          style={{
            background: 'green',
            width: `${progress}%`,
            height: '100%'
          }}
        />
      </div>
      <p>{Math.round(progress)}% complete</p>
    </div>
  );
};

export default ProgressBar;

